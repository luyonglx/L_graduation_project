package com.graduation.pro.study_system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.graduation.pro.study_system.base.ExtJSResponse;
import com.graduation.pro.study_system.mapper.GradeMapper;
import com.graduation.pro.study_system.mapper.SubjectsMapper;
import com.graduation.pro.study_system.pojo.GradeExample;
import com.graduation.pro.study_system.pojo.SubjectsExample;
@Controller
@RequestMapping("/subject")
public class SubjectController {
	@Autowired
	private SubjectsMapper subjectMapper;
	@RequestMapping("/list")
	public @ResponseBody ExtJSResponse list()
	{
		SubjectsExample example=new SubjectsExample();
		return ExtJSResponse.successResWithData(subjectMapper.selectByExample(example));
		
	}

}
