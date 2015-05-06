package com.graduation.pro.study_system.controller;

import java.util.List;

import org.apache.poi.hssf.record.ExtSSTRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.graduation.pro.study_system.base.ExtJSResponse;
import com.graduation.pro.study_system.mapper.QuestionsMapper;
import com.graduation.pro.study_system.pojo.Questions;
import com.graduation.pro.study_system.pojo.QuestionsExample;

@Controller
@RequestMapping("/question")
public class QuestionController {
	@Autowired
	private QuestionsMapper questionMapper;
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public @ResponseBody ExtJSResponse list()
	{
		QuestionsExample example=new QuestionsExample();
		List<Questions> data=questionMapper.selectByExample(example);
		return ExtJSResponse.successResWithData(data);
	}

}
