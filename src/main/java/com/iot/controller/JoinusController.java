package com.iot.controller;

import com.iot.utils.TimeUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by 李攀 on 2018/1/8.
 */
@Controller
public class JoinusController {

    @RequestMapping("/joinus")
    public ModelAndView join() {
        TimeUtil timeUtil = new TimeUtil();
        ModelAndView mav = new ModelAndView();
        String date = "2018-09-01";
        if (timeUtil.time(date) == -1) {
            String info = "招新日期为每年九月 ！";
            mav.setViewName("message");
            mav.addObject("error", info);

            return mav;
        } else if (timeUtil.time(date) == 2) {
            mav.setViewName("failed");
            return mav;
        } else {
            mav.setViewName("joinus");
            return mav;
        }
    }
}
