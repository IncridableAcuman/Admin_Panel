package com.admin.server.util;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.admin.server.model.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JWTUtil {
    private static final String secret=Base64.getEncoder().encodeToString("uzbekistanEpisode1234567890abcdef1234567890".getBytes(StandardCharsets.UTF_8));
    private static final long accessTime=15*60*1000;
    private static final long refreshTime=24*60*60*1000;

    public Key getSigningKey(){
        return Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }

    public String generateToken(User user,long expirationTime){
        return Jwts.builder()
        .setSubject(user.getUsername())//1
        .claim("email", user.getEmail())//2
        .claim("role", user.getRole())//3 ushbu malumotlarni qabul qiladi tokenning payload qismi
        .setIssuedAt(new Date())//tokenni chiqarilgan vaqti
        .setExpiration(new Date(System.currentTimeMillis()+expirationTime))//amal qilish muddati
        .signWith(getSigningKey(),SignatureAlgorithm.HS256)//imzo HS256
        .compact();
    }
        //tokenlar access va refresh
        public Map<String,String> generateTokens(User user){
            Map<String,String> tokens=new HashMap<>();
            tokens.put("accessToken", generateToken(user, accessTime));
            tokens.put("refreshToken", generateToken(user, refreshTime));
            return tokens;
        }
        public boolean validateToken(String token){
            try {
                Jwts.parserBuilder()
                    .setSigningKey(getSigningKey())
                    .build()
                    .parseClaimsJws(token);
            return true;  
            } catch (Exception e) {
                return false;
            }
           
        }
        public String extractUsername(String username){
            return Jwts.parserBuilder()
            .setSigningKey(getSigningKey())
            .build()
            .parseClaimsJws(username)
            .getBody()
            .getSubject();
        }

        public String extractEmail(String email){
            return Jwts.parserBuilder()
            .setSigningKey(getSigningKey())
            .build()
            .parseClaimsJws(email)
            .getBody()
            .getSubject();
        }
}

