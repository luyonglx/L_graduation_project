package com.graduation.pro.study_system.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.graduation.pro.study_system.mapper.SubjectsMapper;
import com.graduation.pro.study_system.mapper.UsersMapper;
import com.graduation.pro.study_system.pojo.Subjects;
import com.graduation.pro.study_system.pojo.Users;

@Service
public class UserService {
	@Autowired
	private UsersMapper usersMapper;
	
	public int insertUser(Users user)
	{
		System.out.println("添加用户");
		return usersMapper.insert(user);
	}

}
