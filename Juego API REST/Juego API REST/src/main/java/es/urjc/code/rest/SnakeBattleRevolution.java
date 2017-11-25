package es.urjc.code.rest;

import java.util.Properties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SnakeBattleRevolution {

	public static void main(String[] args) {
            
            SpringApplication app = new SpringApplication(SnakeBattleRevolution.class);
            Properties properties = new Properties();
            properties.setProperty("spring.resources.staticLocations", "classpath:/static/");
            app.setDefaultProperties(properties);
            app.run(args);
	}
}
