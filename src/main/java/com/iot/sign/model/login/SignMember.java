package com.iot.sign.model.login;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "sign_member")
@Setter
@Getter
public class SignMember { //1
    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "names")
    private String name;
    private Integer grade;
    private Integer isstart;


}
