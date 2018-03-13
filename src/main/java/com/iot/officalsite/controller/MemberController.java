package com.iot.officalsite.controller;

import com.iot.officalsite.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by 李攀 on 2017/12/20.
 */
@Controller
public class MemberController {

    @Autowired
    private MemberRepository memberRepository;

    private String getCurrentUsername() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @RequestMapping("/modify")
    public ModelAndView password(@RequestParam String oldPassword,
                                 @RequestParam String newPassword,
                                 @RequestParam String newPassword2) {

        ModelAndView mav = new ModelAndView();
        String username = getCurrentUsername();

        final boolean standard = oldPassword.equals(memberRepository.findPasswordByName(username))
                        && newPassword.equals(newPassword2)
                        && newPassword.length() <= 10;
        if (standard) {
            memberRepository.setPassword(newPassword, username);
            mav.setViewName("message");
            mav.addObject("error", "修改密码成功 ！");
            return mav;
        } else {
            mav.setViewName("message");
            mav.addObject("error", "修改失败，请检查密码格式或是否一致 ！（密码长度不超过10）");
            return mav;
        }
    }
}
