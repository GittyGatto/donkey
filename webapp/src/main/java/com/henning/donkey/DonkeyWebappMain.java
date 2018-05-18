
package com.henning.donkey;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication(scanBasePackages = "com.henning")
@EnableAutoConfiguration
@Configuration
@ComponentScan(basePackageClasses = {DonkeyWebappMain.class})
@PropertySource(value = {"classpath:application.properties", "classpath:application.${env}.properties"})
@EnableScheduling
@EnableJpaRepositories
@EnableTransactionManagement
@EnableWebMvc
public class DonkeyWebappMain{
    public static void main(String[] args) {

        SpringApplication.run(DonkeyWebappMain.class, args);

        System.err.println("ready");
    }
}