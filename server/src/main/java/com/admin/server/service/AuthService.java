package com.admin.server.service;

import java.sql.Date;

import org.springframework.http.ResponseCookie;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.admin.server.DTO.AuthRequest;
import com.admin.server.DTO.AuthResponse;
import com.admin.server.DTO.LoginRequest;
import com.admin.server.model.Token;
import com.admin.server.model.User;
import com.admin.server.repository.AuthRepository;
import com.admin.server.repository.RefreshTokenRepository;
import com.admin.server.util.JWTUtil;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthRepository authRepository;
    private final JWTUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    private final RefreshTokenRepository refreshTokenRepository;
    private static final long accessTime=900000;
    private static final long refreshTime=604800000;

    public AuthResponse userSignUp(AuthRequest request,HttpServletResponse response){

        //user register
        if(authRepository.findByEmail(request.getEmail()).isPresent()){
            throw new RuntimeException("User already exist");
        }// userni oldin ro'yhatdan o'tkanligini tekshirish
        User user=new User();//userni malumotlarini berish
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(com.admin.server.Enums.Role.USER);
        authRepository.save(user);//saving

        // tokrnni generatsiya qilish
        String refreshToken=jwtUtil.generateToken(user, refreshTime);
        Token token=new Token();// refresh tokenni generatsiya qilib bazaga saqlash
        token.setUser(user);
        token.setRefreshToken(refreshToken);//token
        token.setExpiryDate(new Date(System.currentTimeMillis()+refreshTime));//vaqti
        refreshTokenRepository.save(token);// saving

        ResponseCookie responseCookie=ResponseCookie.from("refreshToken", refreshToken)
        .httpOnly(true)// refresh tokenni cookie ga saqlash
        .secure(false)
        .path("/")
        .maxAge(refreshTime)
        .build();
        response.addHeader("Set-Cookie", responseCookie.toString());
        return new AuthResponse(user.getId(), user.getUsername(),
         user.getEmail(), jwtUtil.generateToken(user, accessTime), refreshToken);//user data
    }
 
    // user login
    public AuthResponse userSignIn(LoginRequest request,HttpServletResponse response){

     User user=authRepository.findByEmail(request.getEmail())
     .orElseThrow(()->new RuntimeException("User not found"));// userni mavjudligini tekshiramiz
     if(!passwordEncoder.matches(request.getPassword(), user.getPassword())){
        throw new RuntimeException("Invalid password!");
     }
     String accessToken=jwtUtil.generateToken(user, accessTime);
     Token token=refreshTokenRepository.findByUser(user)
     .orElseGet(()->{// tokenni generatsiya qilamiz
        Token tokenData=new Token();
        tokenData.setUser(user);
        tokenData.setRefreshToken(jwtUtil.generateToken(user, refreshTime));
        tokenData.setExpiryDate(new Date(System.currentTimeMillis()+refreshTime));
        return refreshTokenRepository.save(tokenData);
     });//cookiega saqlaymiz
     ResponseCookie responseCookie=ResponseCookie.from("refreshToken", token.getRefreshToken())
        .httpOnly(true)
        .secure(false)
        .path("/")
        .maxAge(refreshTime)
        .build();
        response.addHeader("Set-Cookie", responseCookie.toString());
        return new AuthResponse(user.getId(), user.getUsername(), user.getEmail(), accessToken, token.getRefreshToken());
    }

    // refresh regenerating token
    public AuthResponse refresh(String refreshToken,HttpServletResponse response){
        if(refreshToken==null || refreshToken.isEmpty()){
            throw new RuntimeException("Token is missing");
        }
        //token mavjudligi
        if(!jwtUtil.validateToken(refreshToken)){
            throw new RuntimeException("Invalid token");
        }
        String username;
        try {// tokendan emailni ajratib userni haqiqiy 
            username=jwtUtil.extractUsername(refreshToken);//ekanligini
        } catch (Exception e) {//tekshirish
            throw new RuntimeException("Could not extract email from token");
        }

        User user=authRepository.findByUsername(username).orElseThrow(()->new RuntimeException("User not found"));

        Token savedToken=refreshTokenRepository.findByUser(user)
        .orElseThrow(()->new RuntimeException("Token not found"));

        if(!savedToken.getRefreshToken().equals(refreshToken)){//token qiymatlari tengligini tekshirish
            throw new RuntimeException("Token mismatch!");
        }


        String newAccessToken=jwtUtil.generateToken(user, accessTime);
        String newRefreshToken=jwtUtil.generateToken(user, refreshTime);

        savedToken.setRefreshToken(newRefreshToken);
        savedToken.setExpiryDate(new Date(refreshTime));
        refreshTokenRepository.save(savedToken);

        ResponseCookie responseCookie=ResponseCookie.from("refreshToken", newRefreshToken)
            .httpOnly(true)
            .secure(false)
            .path("/")
            .maxAge(refreshTime)
            .build();
        response.addHeader("Set-Cookie", responseCookie.toString());
        return new AuthResponse(user.getId(), user.getUsername(), user.getEmail(), newAccessToken, newRefreshToken);
    }
    // user  logout
    public void userSignOut(String refreshToken){
        Token token=refreshTokenRepository.findByRefreshToken(refreshToken).orElseThrow(()->new RuntimeException("Invalid token"));
        refreshTokenRepository.delete(token);
    }
}
