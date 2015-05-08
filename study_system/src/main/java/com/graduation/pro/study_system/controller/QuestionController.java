package com.graduation.pro.study_system.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.record.ExtSSTRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.graduation.pro.study_system.base.ExtJSResponse;
import com.graduation.pro.study_system.mapper.QuestionChooseMapper;
import com.graduation.pro.study_system.mapper.QuestionsMapper;
import com.graduation.pro.study_system.pojo.QuestionChoose;
import com.graduation.pro.study_system.pojo.QuestionChooseExample;
import com.graduation.pro.study_system.pojo.QuestionInfo;
import com.graduation.pro.study_system.pojo.Questions;
import com.graduation.pro.study_system.pojo.QuestionsExample;
import com.graduation.pro.study_system.util.Page;

@Controller
@RequestMapping("/question")
public class QuestionController {
	@Autowired
	private QuestionsMapper questionMapper;
	@Autowired
	private QuestionChooseMapper questionChooseMapper;
	/**
	 * 查询
	 * @return
	 */
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public @ResponseBody ExtJSResponse list(
			@RequestParam(value="questionId",defaultValue="0") int questionId,
			@RequestParam(value="subjectId",defaultValue="0") int subjectId,
			@RequestParam(value="difficulty",defaultValue="0") int difficulty,
			@RequestParam(value="questionType") String questionType,
			@RequestParam(value="start",defaultValue="0") int start,
			@RequestParam(value="limit") int limit
			){
		ExtJSResponse response=new ExtJSResponse();
		QuestionsExample example=new QuestionsExample();
		
		QuestionsExample.Criteria criteria=example.createCriteria();
		if(questionId!=0)
			criteria.andQuestionIdEqualTo(questionId);
		if(subjectId!=0)
			criteria.andSubjectIdEqualTo(subjectId);
		if(difficulty!=0)
			criteria.andDifficultyEqualTo(difficulty);
		if(questionType!=null && !questionType.equals(""))
			criteria.andQuestionTypeEqualTo(questionType.trim());
		int total=questionMapper.countByExample(example);
		response.put("total", total);
		example.setPage(new Page(start,limit));
		List<Questions> questionList=questionMapper.selectByExample(example);
		response.put("data", questionList);
		return response;
	}
	/**
	 * 更新
	 */
	@RequestMapping("/update")
	public @ResponseBody ExtJSResponse update(@RequestBody Questions questions)
	{
		questionMapper.updateByPrimaryKey(questions);
		return ExtJSResponse.success();
	}
	/**
	 * 新增
	 * @param questions
	 * @return
	 */
	@RequestMapping("/add")
	public @ResponseBody ExtJSResponse add(@RequestBody QuestionInfo questionInfo)
	{
		Questions question=questionInfo.getQuestion();
		//添加问题
		questionMapper.insert(question);
		List<String> answers=questionInfo.getAnswers();
		//将对应的答案选项插入数据库
		for(String answerStr:answers)
		{
			QuestionChoose questionChoose=new QuestionChoose();
			questionChoose.setQuestionId(question.getQuestionId());
			questionChoose.setDescribes(answerStr);
			questionChoose.setOptionStatus(0);
			questionChooseMapper.insert(questionChoose);
		}
		return ExtJSResponse.success();
	}
	/**
	 * 批量删除
	 * @param questionIds
	 * @return
	 */
	
	@RequestMapping("/delete")
	public @ResponseBody ExtJSResponse delete(@RequestBody Questions questions){
		QuestionChooseExample example=new QuestionChooseExample();
		example.createCriteria().andQuestionIdEqualTo(questions.getQuestionId());
		//删除答案
		questionChooseMapper.deleteByExample(example);
		//删除问题
		questionMapper.deleteByPrimaryKey(questions.getQuestionId());
		return ExtJSResponse.success();
	}
	

}
