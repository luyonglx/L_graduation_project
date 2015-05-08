package com.graduation.pro.study_system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.graduation.pro.study_system.base.ExtJSResponse;
import com.graduation.pro.study_system.mapper.SectionMapper;
import com.graduation.pro.study_system.pojo.SectionExample;
@Controller
@RequestMapping("/section")
public class SectionController {
	@Autowired
	private SectionMapper sectionMapper;
	@RequestMapping("/list")
	public @ResponseBody ExtJSResponse list()
	{
		SectionExample example=new SectionExample();
		return ExtJSResponse.successResWithData(sectionMapper.selectByExample(example));
		
	}

}