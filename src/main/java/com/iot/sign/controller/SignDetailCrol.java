package com.iot.sign.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.iot.sign.model.sign.Buqian;
import com.iot.sign.model.sign.SignRecords;
import com.iot.sign.repository.BuqianRepo;
import com.iot.sign.repository.SignRecordsRepo;
import com.iot.sign.utils.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

/**
 * Created by LES on 2018/1/5.
 * 查询个人签到记录
 */


@Controller
@RequestMapping("/signDetail")
public class SignDetailCrol {

    @Autowired
    private SignRecordsRepo signRecordsRepo;

    @Autowired
    private BuqianRepo buqianRepo;

    public String getCurrentUsername() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @RequestMapping("")
    public String showpage(){
        return "signDetail";
    }

    @RequestMapping("/getData")
    @ResponseBody
    public List<SignRecords> getData(@RequestBody String string) throws Exception {

        ObjectMapper mapper = new ObjectMapper();
        Map<String, String> map = (Map<String, String>) mapper.readValue(string, Map.class);
        String starts = map.get("starts");
        String ends = map.get("ends");
        String name = getCurrentUsername();
        long start = new SimpleDateFormat("yyyy-MM-dd").parse(starts).getTime();
        long end = new SimpleDateFormat("yyyy-MM-dd").parse(ends).getTime();

        List<SignRecords> signRecordses = signRecordsRepo.queryByNameTimeDetail(name,new Timestamp(start), new Timestamp(end));
        //!!!
        List<Buqian> buqians = buqianRepo.queryByNameTime(new Timestamp(start), new Timestamp(end),name);
        Integer i = 0;
        if(buqians.size() != 0 && buqians != null){
            while(i < buqians.size()){
                Buqian buqian = buqians.get(i);
                SignRecords signRecords = new SignRecords();
                signRecords.setName(buqian.getName());
                signRecords.setComeTime(buqian.getCreateTime());
                signRecords.setLeaveTime(buqian.getCreateTime());
                signRecords.setTotalMill(Long.valueOf(Integer.valueOf(buqian.getDate().substring(0,1))*3600*1000));
                signRecords.setStrTime(buqian.getDate());
                signRecordses.add(signRecords);
                i++;
            }
        }

        if (signRecordses.size() != 0 && signRecordses != null) {
            //!!!
            long totalMill = 0;
            for(SignRecords signRecords : signRecordses){
                totalMill += signRecords.getTotalMill();
            }
            String total = String.valueOf(DateUtil.formatdate(totalMill));
            SignRecords sign = new SignRecords();
            sign.setStrTime(total);
            signRecordses.add(sign);
        }
        return signRecordses;
    }

}
