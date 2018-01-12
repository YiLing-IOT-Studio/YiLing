package com.iot.sign.repository;

import com.iot.sign.model.login.SignMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by wang0 on 2016/9/13.
 */
public interface SignMemberRepo extends JpaRepository<SignMember, Long> {

    List<SignMember> findByGrade(int grade);

    @Query("select m.name from SignMember m where m.grade =?1")
    List<String> findNameByGrade(int grade);

    @Query("select m.name from SignMember m")
    List<String> findAllNames();

    /**
     * 使用HQL进行某个表的多字段查询
     */
    @Query("select m.name,m.isstart from SignMember m")
    List<Object[]> findNamesAndIsstart();

//    查找已经签到的名字
    @Query("select m.name from SignMember m where m.isstart=1")
    List<String> findNamesStart();

    @Modifying
    @Transactional
    @Query("update SignMember m set m.isstart=1 where m.name=?1")
    int setIsStart(String name);

    @Modifying
    @Transactional
    @Query("update SignMember m set m.isstart=0 where m.name=?1")
    int setIsEnd(String name);

    List<SignMember> findByName(String name);
}
