package com.graduation.pro.study_system.pojo;

import java.io.Serializable;

public class ExampaperToQuestionsKey implements Serializable {
    private Integer examPaperId;

    private Integer questionId;

    private static final long serialVersionUID = 1L;

    public Integer getExamPaperId() {
        return examPaperId;
    }

    public void setExamPaperId(Integer examPaperId) {
        this.examPaperId = examPaperId;
    }

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        ExampaperToQuestionsKey other = (ExampaperToQuestionsKey) that;
        return (this.getExamPaperId() == null ? other.getExamPaperId() == null : this.getExamPaperId().equals(other.getExamPaperId()))
            && (this.getQuestionId() == null ? other.getQuestionId() == null : this.getQuestionId().equals(other.getQuestionId()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getExamPaperId() == null) ? 0 : getExamPaperId().hashCode());
        result = prime * result + ((getQuestionId() == null) ? 0 : getQuestionId().hashCode());
        return result;
    }
}