package com.admin.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.server.model.Token;
import com.admin.server.model.User;

public interface RefreshTokenRepository extends JpaRepository<Token,Long> {
    Optional<Token> findByUser(User user);
    Optional<Token> findByRefreshToken(String refreshToken);
    void deleteByUser(User user);
}
