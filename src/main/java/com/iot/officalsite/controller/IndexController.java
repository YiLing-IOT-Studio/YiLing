package com.iot.officalsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by 李攀 on 2017/12/30.
 */
@Controller
public class IndexController {

    //@RequestMapping("/index")
    //public String login() {
    //    return "yiling";
    //}

    @RequestMapping("/glory.html")
    public String glory() {
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

    @RequestMapping("/failed")
    public String failed() {
        return "failed";
    }

    @RequestMapping("/family.html")
    public String aboutus_other() {
        return "family";
    }

    @RequestMapping("/aboutus.html")
    public String about() {
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