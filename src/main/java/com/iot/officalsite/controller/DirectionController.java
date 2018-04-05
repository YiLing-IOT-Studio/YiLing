package com.iot.officalsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by 李攀 on 2018/1/14.
 */
@Controller
@RequestMapping("/direction")
public class DirectionController {

    @RequestMapping("")
    public String direction(HttpServletResponse response) {
        response.setHeader("Cache-Control", "cache");
        return "main";
    }

    @RequestMapping("/android.html")
    public String android(HttpServletResponse response) {
        response.setHeader("Cache-Control", "cache");
        return "android";
    }

    @RequestMapping("/flushbonading.html")
    public String flush(HttpServletResponse response) {
        response.setHeader("Cache-Control", "cache");
        return "flushbonading";
    }

    @RequestMapping("/web-back.html")
    public String back(HttpServletResponse response) {
        response.setHeader("Cache-Control", "cache");
        return "webBack";
    }

    @RequestMapping("/web-fronted.html")
    public String fronted(HttpServletResponse response) {
        response.setHeader("Cache-Control", "cache");
        return "webFronted";
    }
}
