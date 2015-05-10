package com.graduation.pro.study_system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.graduation.pro.study_system.base.ExtJSResponse;
import com.graduation.pro.study_system.mapper.GradeMapper;
import com.graduation.pro.study_system.pojo.GradeExample;
@Controller
@RequestMapping("/grade")
public class GradeController {
	@Autowired
	private GradeMapper gradeMapper;
	@RequestMapping("/list")
	public @ResponseBody ExtJSResponse list()
	{
		GradeExample example=new GradeExample();
		
		return ExtJSResponse.successResWithData(gradeMapper.selectByExample(example));
		
	}

}
