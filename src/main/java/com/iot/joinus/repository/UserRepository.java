package com.iot.joinus.repository;

import com.iot.joinus.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author: zhangocean
 * @Date: Created in 14:11 2017/12/6
 * Describe: 数据库操作
 */
public interface UserRepository extends JpaRepository<UserInfo, Integer> {
}

