package com.admin.server.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public  class CorsConfig {
    @Bean
    public CorsFilter corsFilter(){
        UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
        CorsConfiguration config=new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(List.of("http://localhost:5173"));
        config.setAllowedHeaders(List.of("Origin","Content-Type","Accept","Authorization"));
        config.setExposedHeaders(List.of("Authorization","Set-Cookie"));
        config.setAllowedMethods(List.of("PUT","DELETE","POST","GET","OPTIONS"));

        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
