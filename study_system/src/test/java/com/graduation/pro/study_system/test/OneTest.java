package com.graduation.pro.study_system.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.graduation.pro.study_system.mapper.UsersMapper;
import com.graduation.pro.study_system.pojo.Subjects;
import com.graduation.pro.study_system.pojo.Users;
import com.graduation.pro.study_system.service.UserService;

public class OneTest {
	public static void main(String[] args) {
	System.out.println("hello world");
	  @SuppressWarnings("resource")
      ApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"classpath:conf/spring.xml"
              ,"classpath:conf/spring-mybatis.xml"});
      UserService userService = (UserService) context.getBean("userService");
      
      Users user = new Users();
      user.setUsername("luoxie");
      System.out.println(userService.insertUser(user));
	  System.out.println(user.getUserId());
	 
}
}
