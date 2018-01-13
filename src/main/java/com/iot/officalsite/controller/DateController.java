package com.iot.officalsite.controller;

import com.iot.officalsite.repository.DateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by 李攀 on 2018/1/13.
 */
@Controller
public class DateController {

    @Autowired
    DateRepository dateRepository;

    @RequestMapping("/setMatchDate")
    public ModelAndView match_time(@RequestParam String match_date) {

        ModelAndView mav = new ModelAndView();
        Integer id = 1;
        dateRepository.setMatchDate(match_date, id);
        mav.setViewName("message");
        mav.addObject("error", "设置物联网创意大赛时间成功 ！");
        return mav;
    }

    @RequestMapping("/setJoinDate")
    public ModelAndView join_time(@RequestParam String join_date) {

        ModelAndView mav = new ModelAndView();
        Integer id = 1;
        dateRepository.setJoinDate(join_date, id);
        mav.setViewName("message");
        mav.addObject("error", "设置招新时间成功 ！");
        return mav;
    }
}
