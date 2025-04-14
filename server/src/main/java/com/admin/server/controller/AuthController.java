package com.admin.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.admin.server.DTO.AuthRequest;
import com.admin.server.DTO.AuthResponse;
import com.admin.server.DTO.LoginRequest;
import com.admin.server.service.AuthService;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Controller
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> userSignUp(@Valid @RequestBody AuthRequest request,HttpServletResponse response){
        return ResponseEntity.ok(authService.userSignUp(request, response));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> userSignIn(@Valid @RequestBody LoginRequest request,HttpServletResponse response){
        return ResponseEntity.ok(authService.userSignIn(request, response));
    }

    @GetMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@CookieValue(value = "refreshToken",required = false) String refreshToken,HttpServletResponse response){
        return ResponseEntity.ok(authService.refresh(refreshToken, response));
    }

    @DeleteMapping("/logout")
    public ResponseEntity<String> userSignOut(@RequestHeader("Authorization") String authorization){
        String refreshToken=authorization.substring(7);
        authService.userSignOut(refreshToken);
        return ResponseEntity.ok("User deleted");
    }
}
