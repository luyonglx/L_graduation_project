package com.graduation.pro.study_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.graduation.pro.study_system.base.ExtJSResponse;
import com.graduation.pro.study_system.mapper.QuestionChooseMapper;
import com.graduation.pro.study_system.pojo.QuestionChoose;
import com.graduation.pro.study_system.pojo.QuestionChooseExample;

@Controller
@RequestMapping("/questionChoose")
public class QuestionChooseController {
	@Autowired
	private QuestionChooseMapper questionChooseMapper;
	
	@RequestMapping("/list")
	public @ResponseBody ExtJSResponse list(@RequestParam int questionId)
	{
		QuestionChooseExample example=new QuestionChooseExample();
		if(questionId!=0)
			example.createCriteria().andQuestionIdEqualTo(questionId);
		List<QuestionChoose> list=questionChooseMapper.selectByExample(example);
		return ExtJSResponse.successResWithData(list);
	}

}
