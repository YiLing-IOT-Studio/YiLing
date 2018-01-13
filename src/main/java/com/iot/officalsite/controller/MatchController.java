package com.iot.officalsite.controller;

import com.iot.officalsite.repository.DateRepository;
import com.iot.officalsite.utils.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by 李攀 on 2018/1/8.
 */
@Controller
public class MatchController {

    @Autowired
    private DateRepository dateRepository;

    @RequestMapping("/match")
    public ModelAndView competition() {

        TimeUtil timeUtil = new TimeUtil();
        ModelAndView mav = new ModelAndView();
        Integer id = 1;
        String date = dateRepository.findMatchDate(id);
        if (timeUtil.time(date) == -1) {
            String info = "未到报名日期 ！";
            mav.setViewName("message");
            mav.addObject("error", info);

            return mav;
        } else if (timeUtil.time(date) == 2) {
            mav.setViewName("failed");
            return mav;
        } else {
            mav.setViewName("match");
            return mav;
        }
    }
}
