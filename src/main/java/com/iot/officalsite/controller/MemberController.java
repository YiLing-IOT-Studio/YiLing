package com.iot.officalsite.controller;

import com.iot.officalsite.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by 李攀 on 2017/12/20.
 */
@Controller
public class MemberController {

    @Autowired
    private MemberRepository memberRepository;

    public String getCurrentUsername() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @RequestMapping("/modify")
    public String password(@RequestParam String oldPassword, @RequestParam String newPassword, @RequestParam String newPassword2) {

        String username = getCurrentUsername();

        if (oldPassword.equals(memberRepository.findPasswordByName(username)) && newPassword.equals(newPassword2)) {

            memberRepository.setPassword(newPassword, username);
        }

        return "redirect:/logout";
    }
}
