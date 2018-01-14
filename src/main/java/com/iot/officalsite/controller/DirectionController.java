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

    @RequestMapping("/android")
    public String android() {
        return "android";
    }

    @RequestMapping("/flush")
    public String flush() {
        return "flushbonading";
    }

    @RequestMapping("/end")
    public String back() {
        return "webBack";
    }

    @RequestMapping("/fronted")
    public String fronted() {
        return "webFronted";
    }
}
