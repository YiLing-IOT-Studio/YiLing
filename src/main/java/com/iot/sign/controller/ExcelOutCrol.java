package com.iot.sign.controller;

import com.iot.sign.dtos.RecordsDto;
import com.iot.sign.model.sign.Buqian;
import com.iot.sign.model.sign.SignRecords;
import com.iot.sign.repository.BuqianRepo;
import com.iot.sign.repository.SignMemberRepo;
import com.iot.sign.repository.SignRecordsRepo;
import com.iot.sign.utils.DateUtil;
import jxl.Workbook;
import jxl.format.UnderlineStyle;
import jxl.write.*;
import jxl.write.Number;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by wang0 on 2016/9/25.
 */
@Controller
@Slf4j
@RequestMapping("/excelout")
@PreAuthorize("hasAnyAuthority('ROLE_TIMER')")
public class ExcelOutCrol {

    @Autowired
    private SignRecordsRepo signRecordsRepo;

    @Autowired
    private SignMemberRepo signMemberRepo;

    @Autowired
    private BuqianRepo buqianRepo;

    @RequestMapping("")
    public String showpage(){
        return "excelout";
    }

    @RequestMapping("/excel")
    @ResponseBody
    public void outToExcel(HttpServletResponse response,
                           @RequestParam(name = "name", required = false) String name,
                           @RequestParam String starts,
                           @RequestParam String ends,
                           @RequestParam(name = "grade", required = false) Integer grade) throws Exception {

        response.setContentType("application/vnd.ms-excel");
        Date date = new Date();
        SimpleDateFormat formatter = new  SimpleDateFormat("yyyy-MM-dd");
        String strdate = formatter.format(date);
        response.setHeader("Content-Disposition", "attachment;filename="+strdate+".xls");
        if (name.equals("")) {
            name = null;
        }
        long start = new SimpleDateFormat("yyyy-MM-dd").parse(starts).getTime();
        long end = new SimpleDateFormat("yyyy-MM-dd").parse(ends).getTime();

        log.info(name);
        log.info(starts);
        log.debug(ends);
        log.debug(String.valueOf(grade));
        List<RecordsDto> dtos = new ArrayList<RecordsDto>();

        if (name != null) {
            RecordsDto recordsDto = new RecordsDto();
            recordsDto.setName(name);
            Long time = signRecordsRepo.queryByNameTime(name, new Timestamp(start), new Timestamp(end));
            List<String> buqians_time = buqianRepo.findByNameStatus(new Timestamp(start), new Timestamp(end),name);
            if(buqians_time != null){
                for(String buqian_time : buqians_time){
                    time += Long.valueOf(Integer.valueOf(buqian_time.substring(0,1))*3600*1000);
                }
            }
            if (time != null) {
                StringBuilder strtime = DateUtil.formatdate(time);
                recordsDto.setTotaltime(strtime);
            } else {
                recordsDto.setTotaltime(new StringBuilder("没有记录"));
            }
            dtos.add(recordsDto);
        } else {
            if (grade == 0) {
                List<String> names = signMemberRepo.findAllNames();
                if (names != null) {
                    for (String string : names) {
                        RecordsDto recordsDto = new RecordsDto();
                        recordsDto.setName(string);
                        Long time = signRecordsRepo.queryByNameTime(string, new Timestamp(start), new Timestamp(end));
                        List<String> buqians_time = buqianRepo.findByNameStatus(new Timestamp(start), new Timestamp(end),string);
                        if(buqians_time != null){
                            for(String buqian_time : buqians_time){
                                time += Long.valueOf(Integer.valueOf(buqian_time.substring(0,1))*3600*1000);
                            }
                        }
                        if (time != null) {
                            StringBuilder strtime = DateUtil.formatdate(time);
                            recordsDto.setTotaltime(strtime);
                        } else {
                            recordsDto.setTotaltime(new StringBuilder("没有记录"));
                        }
                        dtos.add(recordsDto);
                    }
                }
            } else {
                if (grade != null) {
                    List<String> names = signMemberRepo.findNameByGrade(grade);
                    if (names != null) {
                        for (String string : names) {
                            RecordsDto recordsDto = new RecordsDto();
                            recordsDto.setName(string);
                            Long time = signRecordsRepo.queryByNameTime(string, new Timestamp(start), new Timestamp(end));
                            List<String> buqians_time = buqianRepo.findByNameStatus(new Timestamp(start), new Timestamp(end),string);
                            if(buqians_time != null){
                                for(String buqian_time : buqians_time){
                                    time += Long.valueOf(Integer.valueOf(buqian_time.substring(0,1))*3600*1000);
                                }
                            }
                            if (time != null) {
                                StringBuilder strtime = DateUtil.formatdate(time);
                                recordsDto.setTotaltime(strtime);
                            } else {
                                recordsDto.setTotaltime(new StringBuilder("没有记录"));
                            }
                            dtos.add(recordsDto);
                        }
                    }
                } else {
                    List<String> names = signMemberRepo.findAllNames();
                    if (names != null) {
                        for (String string : names) {
                            RecordsDto recordsDto = new RecordsDto();
                            recordsDto.setName(string);
                            Long time = signRecordsRepo.queryByNameTime(string, new Timestamp(start), new Timestamp(end));
                            List<String> buqians_time = buqianRepo.findByNameStatus(new Timestamp(start), new Timestamp(end),string);
                            if(buqians_time != null){
                                for(String buqian_time : buqians_time){
                                    time += Long.valueOf(Integer.valueOf(buqian_time.substring(0,1))*3600*1000);
                                }
                            }
                            if (time != null) {
                                StringBuilder strtime = DateUtil.formatdate(time);
                                recordsDto.setTotaltime(strtime);
                            } else {
                                recordsDto.setTotaltime(new StringBuilder("没有记录"));
                            }
                            dtos.add(recordsDto);
                        }
                    }
                }
            }
        }
        WritableWorkbook wk = Workbook.createWorkbook(response.getOutputStream());
        WritableSheet sheet = wk.createSheet("签到表", 0);
        WritableFont titleFont = new WritableFont(WritableFont.createFont("黑体"), 12, WritableFont.BOLD,
                false, UnderlineStyle.NO_UNDERLINE, Colour.LIGHT_BLUE);

        WritableCellFormat titleFormat = new WritableCellFormat();
        titleFormat.setFont(titleFont);
        titleFormat.setAlignment(Alignment.CENTRE);
        titleFormat.setVerticalAlignment(VerticalAlignment.CENTRE);
        titleFormat.setWrap(true);
        sheet.mergeCells(0, 0, 2, 0);
        sheet.addCell(new Label(0, 0, "签到表", titleFormat));

        WritableCellFormat cloumnTitleFormat = new WritableCellFormat();
        cloumnTitleFormat.setFont(new WritableFont(WritableFont.createFont("宋体"), 10, WritableFont.BOLD, false));
        cloumnTitleFormat.setAlignment(Alignment.CENTRE);
        Label lab_01 = new Label(0, 1, "序号", cloumnTitleFormat);
        Label lab_11 = new Label(1, 1, "姓名", cloumnTitleFormat);
        Label lab_21 = new Label(2, 1, "签到总时间", cloumnTitleFormat);
        sheet.addCell(lab_01);
        sheet.addCell(lab_11);
        sheet.addCell(lab_21);

        int j = 0;
        for (int index = 2; index < dtos.size() + 2; index++) {
            sheet.addCell(new Number(0, index, j + 1));
            sheet.addCell(new Label(1, index, dtos.get(j).getName()));
            sheet.addCell(new Label(2, index, String.valueOf(dtos.get(j).getTotaltime())));
            j++;
        }
        wk.write();
        wk.close();
    }


    @RequestMapping("/excelDetail")
    @ResponseBody
    public void outDetailToExcel(HttpServletResponse response,
                                 @RequestParam(name = "name", required = false) String name,
                                 @RequestParam String starts,
                                 @RequestParam String ends,
                                 @RequestParam(name = "grade", required = false) Integer grade) throws Exception {
        response.setContentType("application/vnd.ms-excel");
        Date date = new Date();
        SimpleDateFormat formatter = new  SimpleDateFormat("yyyy-MM-dd");
        String strdate = formatter.format(date);
        response.setHeader("Content-Disposition", "attachment;filename="+strdate+"detail.xls");
        if (name.equals("")) {
            name = null;
        }
        long start = new SimpleDateFormat("yyyy-MM-dd").parse(starts).getTime();
        long end = new SimpleDateFormat("yyyy-MM-dd").parse(ends).getTime();
        log.info(name);
        log.info(starts);
        log.debug(ends);
        log.debug(String.valueOf(grade));
        List<SignRecords> signRecordses = new ArrayList<SignRecords>();
        List<Buqian> buqians = new ArrayList<>();

        if (name != null) {
            signRecordses = signRecordsRepo.queryByNameTimeDetail(name, new Timestamp(start), new Timestamp(end));
            buqians = buqianRepo.queryByNameTime(new Timestamp(start), new Timestamp(end),name);
        } else {
            if (grade == 0 || grade == null) {
                signRecordses = signRecordsRepo.findAllOrder(new Timestamp(start), new Timestamp(end));
                buqians = buqianRepo.findByStatusIdEq1(new Timestamp(start), new Timestamp(end));
            } else {
                //!!!
                signRecordses = signRecordsRepo.queryByGradeTimeDetail(new Timestamp(start), new Timestamp(end), grade);
                buqians = buqianRepo.queryByGradeTimeDetail(new Timestamp(start), new Timestamp(end), grade);
            }
        }

        DateFormat df = new DateFormat("yyyy-MM-dd hh:mm:ss");
        WritableCellFormat datewcf = new WritableCellFormat(df);
        WritableWorkbook wk = Workbook.createWorkbook(response.getOutputStream());
        WritableSheet sheet = wk.createSheet("签到详情表", 0);

        WritableFont titleFont = new WritableFont(WritableFont.createFont("黑体"), 12, WritableFont.BOLD,
                false, UnderlineStyle.NO_UNDERLINE);
        WritableCellFormat titleFormat = new WritableCellFormat();
        titleFormat.setFont(titleFont);
        titleFormat.setAlignment(Alignment.CENTRE);
        titleFormat.setVerticalAlignment(VerticalAlignment.CENTRE);
        titleFormat.setWrap(true);
        sheet.mergeCells(0, 0, 4, 0);
        sheet.addCell(new Label(0, 0, "签到详情表", titleFormat));

        WritableCellFormat cloumnTitleFormat = new WritableCellFormat();
        cloumnTitleFormat.setFont(new WritableFont(WritableFont.createFont("宋体"), 10, WritableFont.BOLD, false));
        cloumnTitleFormat.setAlignment(Alignment.CENTRE);
        sheet.addCell(new Label(0, 1, "序号", cloumnTitleFormat));
        sheet.addCell(new Label(1, 1, "姓名", cloumnTitleFormat));
        sheet.addCell(new Label(2, 1, "签到时间", cloumnTitleFormat));
        sheet.addCell(new Label(3, 1, "签退时间", cloumnTitleFormat));
        sheet.addCell(new Label(4, 1, "总时间", cloumnTitleFormat));

        int j = 0;
        int index = 2;
        for (; index < signRecordses.size() + 2; index++) {
            sheet.addCell(new Number(0, index, j + 1));
            sheet.addCell(new Label(1, index, signRecordses.get(j).getName()));
            sheet.addCell(new DateTime(2, index, signRecordses.get(j).getComeTime(), datewcf));
            sheet.addCell(new DateTime(3, index, signRecordses.get(j).getLeaveTime(), datewcf));
            sheet.addCell(new Label(4, index, signRecordses.get(j).getStrTime()));
            j++;
        }

        sheet.mergeCells(0, index, 4, index);
        sheet.mergeCells(0, index+1, 4, index+1);
        sheet.addCell(new Label(0, index+1, "以下是补签详情", titleFormat));
        index += 2;

        for(j = 0; index < buqians.size() + signRecordses.size() + 4; index++){
            sheet.addCell(new Number(0, index, j + 1));
            sheet.addCell(new Label(1, index, buqians.get(j).getName()));
            sheet.addCell(new DateTime(2, index, buqians.get(j).getCreateTime(), datewcf));
            sheet.addCell(new DateTime(3, index, buqians.get(j).getCreateTime(), datewcf));
            sheet.addCell(new Label(4, index, buqians.get(j).getDate()));
            j++;
        }

        wk.write();
        wk.close();
    }
}
