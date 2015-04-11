package com.graduation.pro.study_system.pojo;

import java.io.Serializable;
import java.util.Date;

public class ExamPaper implements Serializable {
    private Integer examPaperId;

    private String creator;

    private Float valueRate;

    private Integer examedCount;

    private Date createTime;

    private String examPaperName;

    private Integer limitTime;

    private static final long serialVersionUID = 1L;

    public Integer getExamPaperId() {
        return examPaperId;
    }

    public void setExamPaperId(Integer examPaperId) {
        this.examPaperId = examPaperId;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator == null ? null : creator.trim();
    }

    public Float getValueRate() {
        return valueRate;
    }

    public void setValueRate(Float valueRate) {
        this.valueRate = valueRate;
    }

    public Integer getExamedCount() {
        return examedCount;
    }

    public void setExamedCount(Integer examedCount) {
        this.examedCount = examedCount;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getExamPaperName() {
        return examPaperName;
    }

    public void setExamPaperName(String examPaperName) {
        this.examPaperName = examPaperName == null ? null : examPaperName.trim();
    }

    public Integer getLimitTime() {
        return limitTime;
    }

    public void setLimitTime(Integer limitTime) {
        this.limitTime = limitTime;
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
        ExamPaper other = (ExamPaper) that;
        return (this.getExamPaperId() == null ? other.getExamPaperId() == null : this.getExamPaperId().equals(other.getExamPaperId()))
            && (this.getCreator() == null ? other.getCreator() == null : this.getCreator().equals(other.getCreator()))
            && (this.getValueRate() == null ? other.getValueRate() == null : this.getValueRate().equals(other.getValueRate()))
            && (this.getExamedCount() == null ? other.getExamedCount() == null : this.getExamedCount().equals(other.getExamedCount()))
            && (this.getCreateTime() == null ? other.getCreateTime() == null : this.getCreateTime().equals(other.getCreateTime()))
            && (this.getExamPaperName() == null ? other.getExamPaperName() == null : this.getExamPaperName().equals(other.getExamPaperName()))
            && (this.getLimitTime() == null ? other.getLimitTime() == null : this.getLimitTime().equals(other.getLimitTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getExamPaperId() == null) ? 0 : getExamPaperId().hashCode());
        result = prime * result + ((getCreator() == null) ? 0 : getCreator().hashCode());
        result = prime * result + ((getValueRate() == null) ? 0 : getValueRate().hashCode());
        result = prime * result + ((getExamedCount() == null) ? 0 : getExamedCount().hashCode());
        result = prime * result + ((getCreateTime() == null) ? 0 : getCreateTime().hashCode());
        result = prime * result + ((getExamPaperName() == null) ? 0 : getExamPaperName().hashCode());
        result = prime * result + ((getLimitTime() == null) ? 0 : getLimitTime().hashCode());
        return result;
    }
}