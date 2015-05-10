package com.graduation.pro.study_system.pojo.other;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

public class ItemFileInfoWhenAdd {
	private String itemFileName;
	private int subjectId;
	private int sectionId;
	private int gradeId;
	private String resourceFrom;
	private String author;
	private int downloadPrice;
	private MultipartFile  uploadFile;
	public String getItemFileName() {
		return itemFileName;
	}
	public void setItemFileName(String itemFileName) {
		this.itemFileName = itemFileName;
	}
	public int getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(int subjectId) {
		this.subjectId = subjectId;
	}
	public int getSectionId() {
		return sectionId;
	}
	public void setSectionId(int sectionId) {
		this.sectionId = sectionId;
	}
	public int getGradeId() {
		return gradeId;
	}
	public void setGradeId(int gradeId) {
		this.gradeId = gradeId;
	}
	public String getResourceFrom() {
		return resourceFrom;
	}
	public void setResourceFrom(String resourceFrom) {
		this.resourceFrom = resourceFrom;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public int getDownloadPrice() {
		return downloadPrice;
	}
	public void setDownloadPrice(int downloadPrice) {
		this.downloadPrice = downloadPrice;
	}
	public MultipartFile getUploadFile() {
		return uploadFile;
	}
	public void setUploadFile(CommonsMultipartFile uploadFile) {
		this.uploadFile = uploadFile;
	}
	
	

}
