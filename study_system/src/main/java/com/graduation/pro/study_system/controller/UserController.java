package com.graduation.pro.study_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.graduation.pro.study_system.base.ExtJSResponse;
import com.graduation.pro.study_system.mapper.UsersMapper;
import com.graduation.pro.study_system.pojo.Users;
import com.graduation.pro.study_system.pojo.UsersExample;
import com.graduation.pro.study_system.pojo.other.UserInfo;

@Controller
@RequestMapping("/userManage")
public class UserController {
	@Autowired
	private UsersMapper userMapper;
    @RequestMapping("/index")
    public String index(){
        return "index";
    }
    @RequestMapping(value="/userList", method = RequestMethod.GET) 
    public @ResponseBody ExtJSResponse getUserList(){
    	ExtJSResponse resp=new ExtJSResponse();
    	UsersExample example=new UsersExample();
    	List<Users> list = (List<Users>) userMapper.selectByExample(example);
    	resp.put("data", list);
    	return resp;
    }
    
    @RequestMapping("/studyResource")
    public String studyResource(){
        return "StudyResource";
    }
    
    @RequestMapping("/add")
    public @ResponseBody ExtJSResponse add(@RequestBody Users user){
    	System.out.println(user.getUsername());
    	userMapper.insert(user);
    	return ExtJSResponse.success();
    	
    }
    
    @RequestMapping("/del")
    public @ResponseBody ExtJSResponse del(@RequestBody Users user){
    	//System.out.println(user.getUsername());
    	userMapper.deleteByPrimaryKey(user.getUserId());
    	return ExtJSResponse.success();
    }
    
    @RequestMapping("/update")
    public @ResponseBody ExtJSResponse update(@RequestBody Users user){
    	//System.out.println(user.getUsername());
    	userMapper.updateByPrimaryKey(user);
    	return ExtJSResponse.success();
    }
    
    
    
    
     
}