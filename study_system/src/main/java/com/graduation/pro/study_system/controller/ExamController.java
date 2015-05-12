package com.graduation.pro.study_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.graduation.pro.study_system.base.ExtJSResponse;
import com.graduation.pro.study_system.mapper.QuestionChooseMapper;
import com.graduation.pro.study_system.mapper.QuestionsMapper;
import com.graduation.pro.study_system.pojo.QuestionChooseExample;
import com.graduation.pro.study_system.pojo.other.AnswerSheetInfo;
import com.graduation.pro.study_system.pojo.other.QuestionAndOption;

@Controller
@RequestMapping("/exam")
public class ExamController {
	@Autowired
	private QuestionsMapper questionsMapper;
	@Autowired
	private QuestionChooseMapper questionChooseMapper;
	/**
	 * 计算分数
	 * @param answerOptionList
	 * @return
	 */
	@RequestMapping("/getExamScore")
	public @ResponseBody ExtJSResponse getExamScore(@RequestBody AnswerSheetInfo answerSheetInfo){
		ExtJSResponse resp=new ExtJSResponse();
		List<QuestionAndOption> answerOptionList=answerSheetInfo.getAnswerOptionList();
		int questionCount=answerOptionList.size();
		int rightCount=0;
		for(QuestionAndOption qAO:answerOptionList)
		{
			QuestionChooseExample example=new QuestionChooseExample();
			example.createCriteria().andQuestionIdEqualTo(qAO.getQuestionId())
									.andOptionStatusEqualTo(1);
			if(qAO.getOptionId()==questionChooseMapper.selectByExample(example).get(0).getOptionId())
				rightCount++;
		}
		double rightRate=rightCount/questionCount;
		resp.put("rightRate", rightCount+"/"+questionCount);
		resp.setSuccess(true);
		return resp;
	}

}
