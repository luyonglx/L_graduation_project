package com.graduation.pro.study_system.pojo;

import java.io.Serializable;
import java.util.Date;

public class AnswerSheet implements Serializable {
    private Integer answerSheetId;

    private Integer examPaperId;

    private Integer userid;

    private Date examTime;

    private String answerIdsSt;

    private static final long serialVersionUID = 1L;

    public Integer getAnswerSheetId() {
        return answerSheetId;
    }

    public void setAnswerSheetId(Integer answerSheetId) {
        this.answerSheetId = answerSheetId;
    }

    public Integer getExamPaperId() {
        return examPaperId;
    }

    public void setExamPaperId(Integer examPaperId) {
        this.examPaperId = examPaperId;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Date getExamTime() {
        return examTime;
    }

    public void setExamTime(Date examTime) {
        this.examTime = examTime;
    }

    public String getAnswerIdsSt() {
        return answerIdsSt;
    }

    public void setAnswerIdsSt(String answerIdsSt) {
        this.answerIdsSt = answerIdsSt == null ? null : answerIdsSt.trim();
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
        AnswerSheet other = (AnswerSheet) that;
        return (this.getAnswerSheetId() == null ? other.getAnswerSheetId() == null : this.getAnswerSheetId().equals(other.getAnswerSheetId()))
            && (this.getExamPaperId() == null ? other.getExamPaperId() == null : this.getExamPaperId().equals(other.getExamPaperId()))
            && (this.getUserid() == null ? other.getUserid() == null : this.getUserid().equals(other.getUserid()))
            && (this.getExamTime() == null ? other.getExamTime() == null : this.getExamTime().equals(other.getExamTime()))
            && (this.getAnswerIdsSt() == null ? other.getAnswerIdsSt() == null : this.getAnswerIdsSt().equals(other.getAnswerIdsSt()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getAnswerSheetId() == null) ? 0 : getAnswerSheetId().hashCode());
        result = prime * result + ((getExamPaperId() == null) ? 0 : getExamPaperId().hashCode());
        result = prime * result + ((getUserid() == null) ? 0 : getUserid().hashCode());
        result = prime * result + ((getExamTime() == null) ? 0 : getExamTime().hashCode());
        result = prime * result + ((getAnswerIdsSt() == null) ? 0 : getAnswerIdsSt().hashCode());
        return result;
    }
}