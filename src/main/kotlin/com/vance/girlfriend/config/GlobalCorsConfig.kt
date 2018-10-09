package com.vance.girlfriend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import java.util.*

@Configuration
public class GlobalCorsConfig {

    @Bean
    fun corsFilter(): CorsFilter {
        val config = CorsConfiguration()
        config.allowedOrigins = Arrays.asList("*")
        config.allowCredentials = true
        config.allowedMethods = Arrays.asList("*")
        config.allowedHeaders = Arrays.asList("*")

        val configSource = UrlBasedCorsConfigurationSource()
        configSource.registerCorsConfiguration("/**", config)

        return CorsFilter(configSource)
    }
}