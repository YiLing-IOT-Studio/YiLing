package com.iot.officalsite.repository;

import com.iot.officalsite.entity.Date;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by 李攀 on 2018/1/13.
 */
public interface DateRepository extends JpaRepository<Date, Long> {

    @Query("select date.match_time from Date date where date.id=?1")
    String findMatchDate(Integer id);

    @Query("select date.join_time from Date date where date.id=?1")
    String findJoinDate(Integer id);

    @Modifying
    @Transactional
    @Query("update Date date set date.match_time=?1 where date.id=?2")
    void setMatchDate(String time, Integer id);

    @Modifying
    @Transactional
    @Query("update Date date set date.join_time=?1 where date.id=?2")
    void setJoinDate(String time, Integer id);
}
