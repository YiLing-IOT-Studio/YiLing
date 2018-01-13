package com.iot.sign.repository;


import com.iot.sign.model.sign.Buqian;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by wang0 on 2016/9/23.
 */
public interface BuqianRepo extends JpaRepository<Buqian, Long> {

    @Query("select count(b) from Buqian b where b.createTime>?1 and b.createTime<?2 and b.name=?3")
    Integer findAllBuqian(Timestamp starttime, Timestamp endtime, String name);

    /*
    待审核
     */
    @Query("select b from Buqian b where b.status=0")
    List<Buqian> findByStatusEq0();

    /*
    已通过审核
     */
    @Query("select b from Buqian b where b.status=1")
    List<Buqian> findByStatusEq1();

    /*
    未通过审核
     */
    @Query("select b from Buqian b where b.status=2")
    List<Buqian> findByStatusEq2();

    @Modifying
    @Transactional
    @Query("update Buqian b set b.status=1 where b.id=?1")
    int setBuqianSuccessful(Long id);

    @Modifying
    @Transactional
    @Query("update Buqian b set b.status=2 where b.id=?1")
    int setBuqianFailed(Long id);

    //根据名字查找有效补签时间
    @Query("select b.date from Buqian b where b.createTime>?1 and b.createTime<?2 and b.name=?3 and b.status=1")
    List<String> findByNameStatus(Timestamp starttime, Timestamp endtime, String name);

    //根据名字查找有效补签时间
    @Query("select b from Buqian b where b.createTime>?1 and b.createTime<?2 and b.name=?3 and b.status=1")
    List<Buqian> queryByNameTime(Timestamp starttime, Timestamp endtime, String name);

    /*已通过审核，查找!!!
     */
    @Query("select b from Buqian b where b.createTime>?1 and b.createTime<?2 and b.status=1 order by b.name")
    List<Buqian> findByStatusIdEq1(Timestamp starttime, Timestamp endtime);


    @Query("select b from Buqian b where b.createTime>?1 and b.createTime<?2 and b.status=1 and b.name in (select m.name from SignMember m where m.grade = ?3) order by b.name")
    List<Buqian> queryByGradeTimeDetail(Timestamp starttime, Timestamp endtime, Integer grade);
}
