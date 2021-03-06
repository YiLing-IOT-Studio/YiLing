package com.iot.officalsite.config;

import com.iot.officalsite.service.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter;
import org.thymeleaf.extras.springsecurity4.dialect.SpringSecurityDialect;
import org.thymeleaf.spring4.SpringTemplateEngine;
import org.thymeleaf.templateresolver.TemplateResolver;

/**
 * Created by 李攀 on 2017/12/3.
 */
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    UserDetailsService customUserService() {
        return new MemberService();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserService());
    }

    @Bean
    public SimpleUrlAuthenticationSuccessHandler authenticationSuccessHandler() {
        return new AjaxAuthSuccessHandler();
    }

    @Bean
    public SpringTemplateEngine templateEngine(TemplateResolver templateResolver) {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.setTemplateResolver(templateResolver);
        templateEngine.addDialect(new SpringSecurityDialect());//注册安全方言
        return templateEngine;
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().antMatchers("/img/**","/js/**","b/**","/fonts/**","/dest/**","/stylesheets/**");
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {

        //http.headers().frameOptions().disable();

        http.headers()
                .addHeaderWriter(new XFrameOptionsHeaderWriter(XFrameOptionsHeaderWriter.XFrameOptionsMode.SAMEORIGIN))
                .and().exceptionHandling().authenticationEntryPoint(new UnauthorizedEntryPoint())
                .and().authorizeRequests()
                .antMatchers("/setDate").hasAuthority("ROLE_ADMIN")
                .antMatchers("/sign").hasAuthority("ROLE_TIMER")
                .and().formLogin()
                .loginPage("/index")
                .loginProcessingUrl("/login")
                .usernameParameter("username").passwordParameter("password")
                .successHandler(new AjaxAuthSuccessHandler())
                .failureHandler(new AjaxAuthFailHandler())
                .permitAll()
                .and().rememberMe().key("remember-me").rememberMeParameter("remember-me").tokenValiditySeconds(1209600)
                .and().logout().logoutSuccessUrl("/").permitAll()
                .and().csrf().disable();
    }
}
