package es.urjc.code.juegosenred.rest.ejer2;

import java.util.Properties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@EnableWebSocket
@SpringBootApplication
public class SnakeBattleRevolution {

    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(createChatHandler(), "/chat").setAllowedOrigins("*");
    }
	
    @Bean
    public ChatHandler createChatHandler() {
        return new ChatHandler();
    }
    
    public static void main(String[] args) {
    
        SpringApplication app = new SpringApplication(SnakeBattleRevolution.class);
        Properties properties = new Properties();
        properties.setProperty("spring.resources.staticLocations", "classpath:/static/");
        app.setDefaultProperties(properties);
        app.run(args);
    }
}
