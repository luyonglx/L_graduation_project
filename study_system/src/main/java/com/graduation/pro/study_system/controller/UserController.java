package com.graduation.pro.study_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.graduation.pro.study_system.mapper.UsersMapper;
import com.graduation.pro.study_system.pojo.Users;
import com.graduation.pro.study_system.pojo.UsersExample;

@Controller
@RequestMapping("/")
public class UserController {
	@Autowired
	private UsersMapper userMapper;
    @RequestMapping("index")
    public String index(){
        return "index";
    }
    @RequestMapping(value="userList", method = RequestMethod.GET) 
    public @ResponseBody List getUserList(){
    UsersExample example=new UsersExample();
    List<Users> list = (List<Users>) userMapper.selectByExample(example);
       return list;
    }
    
    @RequestMapping("studyResource")
    public String studyResource(){
        return "StudyResource";
    }
    
    
     
}