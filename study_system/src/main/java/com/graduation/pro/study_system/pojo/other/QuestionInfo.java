package com.graduation.pro.study_system.pojo.other;

import java.util.List;

import com.graduation.pro.study_system.pojo.Questions;

public class QuestionInfo {
	private Questions question;
	public List<String> getAnswers() {
		return answers;
	}
	public Questions getQuestion() {
		return question;
	}
	public void setQuestions(Questions questions) {
		this.question = questions;
	}
	
	public void setAnswers(List<String> answers) {
		this.answers = answers;
	}
	private List<String> answers;
}
