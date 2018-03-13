package com.iot.officalsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by 李攀 on 2017/12/30.
 */
@Controller
public class IndexController {

    @RequestMapping("/glory.html")
    public String glory(HttpServletResponse response) {
        response.setHeader("Cache-Control", "cache");
        return "glory";
    }

    @RequestMapping("/info.html")
    public String info() {
        return "info";
    }

    @RequestMapping("/message.html")
    public String message() {
        return "message";
    }

    @RequestMapping("/")
    public String index(HttpServletResponse response) {
        response.setHeader("Cache-Control", "cache");
        return "yiling";
    }

    @RequestMapping("/family.html")
    public String aboutus_other(HttpServletResponse response) {
        response.setHeader("Cache-Control", "cache");
        return "family";
    }

    @RequestMapping("/aboutus.html")
    public String about(HttpServletResponse response) {
        response.setHeader("Cache-Control", "cache");
        return "aboutUs";
    }

    @RequestMapping("/setPassword")
    public String password() {
        return "pwd";
    }

    @RequestMapping("/setDate")
    public String setDate() {
        return "date";
    }
}