package com.iot.officalsite.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by 李攀 on 2018/1/8.
 */
public class TimeUtil {

    public int time(String date) {

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String now = dateFormat.format(new Date());
        int number;
        try {
            Date now2 = dateFormat.parse(now);
            Date date2 = dateFormat.parse(date);
            number = now2.compareTo(date2);

            return number;
        } catch (ParseException e) {
            e.printStackTrace();
            return 2;
        }

    }
}
