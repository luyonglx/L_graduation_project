package com.graduation.pro.study_system.pojo;

import java.io.Serializable;
import java.util.Date;

public class ItemFile implements Serializable {
    private Integer itemFileId;

    private Integer gradeId;

    private Integer subjectId;

    private Integer fileId;

    private Integer sectionId;

    private String itemFileName;

    private Integer viewCount;

    private Integer evaluate;

    private String resourceFrom;

    private String author;

    private Integer downloadPrice;

    private Date enteringDate;

    private String itemfileimg;

    private String itemFileDesc;

    private String itemFileSwf;

    private static final long serialVersionUID = 1L;

    public Integer getItemFileId() {
        return itemFileId;
    }

    public void setItemFileId(Integer itemFileId) {
        this.itemFileId = itemFileId;
    }

    public Integer getGradeId() {
        return gradeId;
    }

    public void setGradeId(Integer gradeId) {
        this.gradeId = gradeId;
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }

    public Integer getFileId() {
        return fileId;
    }

    public void setFileId(Integer fileId) {
        this.fileId = fileId;
    }

    public Integer getSectionId() {
        return sectionId;
    }

    public void setSectionId(Integer sectionId) {
        this.sectionId = sectionId;
    }

    public String getItemFileName() {
        return itemFileName;
    }

    public void setItemFileName(String itemFileName) {
        this.itemFileName = itemFileName == null ? null : itemFileName.trim();
    }

    public Integer getViewCount() {
        return viewCount;
    }

    public void setViewCount(Integer viewCount) {
        this.viewCount = viewCount;
    }

    public Integer getEvaluate() {
        return evaluate;
    }

    public void setEvaluate(Integer evaluate) {
        this.evaluate = evaluate;
    }

    public String getResourceFrom() {
        return resourceFrom;
    }

    public void setResourceFrom(String resourceFrom) {
        this.resourceFrom = resourceFrom == null ? null : resourceFrom.trim();
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author == null ? null : author.trim();
    }

    public Integer getDownloadPrice() {
        return downloadPrice;
    }

    public void setDownloadPrice(Integer downloadPrice) {
        this.downloadPrice = downloadPrice;
    }

    public Date getEnteringDate() {
        return enteringDate;
    }

    public void setEnteringDate(Date enteringDate) {
        this.enteringDate = enteringDate;
    }

    public String getItemfileimg() {
        return itemfileimg;
    }

    public void setItemfileimg(String itemfileimg) {
        this.itemfileimg = itemfileimg == null ? null : itemfileimg.trim();
    }

    public String getItemFileDesc() {
        return itemFileDesc;
    }

    public void setItemFileDesc(String itemFileDesc) {
        this.itemFileDesc = itemFileDesc == null ? null : itemFileDesc.trim();
    }

    public String getItemFileSwf() {
        return itemFileSwf;
    }

    public void setItemFileSwf(String itemFileSwf) {
        this.itemFileSwf = itemFileSwf == null ? null : itemFileSwf.trim();
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
        ItemFile other = (ItemFile) that;
        return (this.getItemFileId() == null ? other.getItemFileId() == null : this.getItemFileId().equals(other.getItemFileId()))
            && (this.getGradeId() == null ? other.getGradeId() == null : this.getGradeId().equals(other.getGradeId()))
            && (this.getSubjectId() == null ? other.getSubjectId() == null : this.getSubjectId().equals(other.getSubjectId()))
            && (this.getFileId() == null ? other.getFileId() == null : this.getFileId().equals(other.getFileId()))
            && (this.getSectionId() == null ? other.getSectionId() == null : this.getSectionId().equals(other.getSectionId()))
            && (this.getItemFileName() == null ? other.getItemFileName() == null : this.getItemFileName().equals(other.getItemFileName()))
            && (this.getViewCount() == null ? other.getViewCount() == null : this.getViewCount().equals(other.getViewCount()))
            && (this.getEvaluate() == null ? other.getEvaluate() == null : this.getEvaluate().equals(other.getEvaluate()))
            && (this.getResourceFrom() == null ? other.getResourceFrom() == null : this.getResourceFrom().equals(other.getResourceFrom()))
            && (this.getAuthor() == null ? other.getAuthor() == null : this.getAuthor().equals(other.getAuthor()))
            && (this.getDownloadPrice() == null ? other.getDownloadPrice() == null : this.getDownloadPrice().equals(other.getDownloadPrice()))
            && (this.getEnteringDate() == null ? other.getEnteringDate() == null : this.getEnteringDate().equals(other.getEnteringDate()))
            && (this.getItemfileimg() == null ? other.getItemfileimg() == null : this.getItemfileimg().equals(other.getItemfileimg()))
            && (this.getItemFileDesc() == null ? other.getItemFileDesc() == null : this.getItemFileDesc().equals(other.getItemFileDesc()))
            && (this.getItemFileSwf() == null ? other.getItemFileSwf() == null : this.getItemFileSwf().equals(other.getItemFileSwf()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getItemFileId() == null) ? 0 : getItemFileId().hashCode());
        result = prime * result + ((getGradeId() == null) ? 0 : getGradeId().hashCode());
        result = prime * result + ((getSubjectId() == null) ? 0 : getSubjectId().hashCode());
        result = prime * result + ((getFileId() == null) ? 0 : getFileId().hashCode());
        result = prime * result + ((getSectionId() == null) ? 0 : getSectionId().hashCode());
        result = prime * result + ((getItemFileName() == null) ? 0 : getItemFileName().hashCode());
        result = prime * result + ((getViewCount() == null) ? 0 : getViewCount().hashCode());
        result = prime * result + ((getEvaluate() == null) ? 0 : getEvaluate().hashCode());
        result = prime * result + ((getResourceFrom() == null) ? 0 : getResourceFrom().hashCode());
        result = prime * result + ((getAuthor() == null) ? 0 : getAuthor().hashCode());
        result = prime * result + ((getDownloadPrice() == null) ? 0 : getDownloadPrice().hashCode());
        result = prime * result + ((getEnteringDate() == null) ? 0 : getEnteringDate().hashCode());
        result = prime * result + ((getItemfileimg() == null) ? 0 : getItemfileimg().hashCode());
        result = prime * result + ((getItemFileDesc() == null) ? 0 : getItemFileDesc().hashCode());
        result = prime * result + ((getItemFileSwf() == null) ? 0 : getItemFileSwf().hashCode());
        return result;
    }
}