package com.iot.officalsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by 李攀 on 2018/1/14.
 */
@Controller
@RequestMapping("/direction")
public class DirectionController {

    @RequestMapping("")
    public String direction() {
        return "main";
    }

    @RequestMapping("/android.html")
    public String android() {
        return "android";
    }

    @RequestMapping("/flushbonading.html")
    public String flush() {
        return "flushbonading";
    }

    @RequestMapping("/web-back.html")
    public String back() {
        return "webBack";
    }

    @RequestMapping("/web-fronted.html")
    public String fronted() {
        return "webFronted";
    }
}
