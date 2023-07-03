package backend.filmesporgenerobackend.Config;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
  SecurityFilterChain web(HttpSecurity http) throws Exception {
        http
             .authorizeHttpRequests((authorizeHttpRequests) ->
                 authorizeHttpRequests.anyRequest().permitAll()
             )
             .csrf().disable();
        return http.build();
    }
}