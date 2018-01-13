package com.iot.aboutus.repository;

import com.iot.aboutus.entity.Info;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author: zhangocean
 * @Date: Created in 19:27 2017/12/18
 * Describe:
 */
public interface InfoRepository extends JpaRepository<Info, Integer> {
}
