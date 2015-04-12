package com.graduation.pro.study_system.pojo;

import com.graduation.pro.study_system.util.Page;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class ItemFileExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Page page;

    public ItemFileExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    public void setPage(Page page) {
        this.page=page;
    }

    public Page getPage() {
        return page;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        protected void addCriterionForJDBCDate(String condition, Date value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value.getTime()), property);
        }

        protected void addCriterionForJDBCDate(String condition, List<Date> values, String property) {
            if (values == null || values.size() == 0) {
                throw new RuntimeException("Value list for " + property + " cannot be null or empty");
            }
            List<java.sql.Date> dateList = new ArrayList<java.sql.Date>();
            Iterator<Date> iter = values.iterator();
            while (iter.hasNext()) {
                dateList.add(new java.sql.Date(iter.next().getTime()));
            }
            addCriterion(condition, dateList, property);
        }

        protected void addCriterionForJDBCDate(String condition, Date value1, Date value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value1.getTime()), new java.sql.Date(value2.getTime()), property);
        }

        public Criteria andItemFileIdIsNull() {
            addCriterion("item_file_Id is null");
            return (Criteria) this;
        }

        public Criteria andItemFileIdIsNotNull() {
            addCriterion("item_file_Id is not null");
            return (Criteria) this;
        }

        public Criteria andItemFileIdEqualTo(Integer value) {
            addCriterion("item_file_Id =", value, "itemFileId");
            return (Criteria) this;
        }

        public Criteria andItemFileIdNotEqualTo(Integer value) {
            addCriterion("item_file_Id <>", value, "itemFileId");
            return (Criteria) this;
        }

        public Criteria andItemFileIdGreaterThan(Integer value) {
            addCriterion("item_file_Id >", value, "itemFileId");
            return (Criteria) this;
        }

        public Criteria andItemFileIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("item_file_Id >=", value, "itemFileId");
            return (Criteria) this;
        }

        public Criteria andItemFileIdLessThan(Integer value) {
            addCriterion("item_file_Id <", value, "itemFileId");
            return (Criteria) this;
        }

        public Criteria andItemFileIdLessThanOrEqualTo(Integer value) {
            addCriterion("item_file_Id <=", value, "itemFileId");
            return (Criteria) this;
        }

        public Criteria andItemFileIdIn(List<Integer> values) {
            addCriterion("item_file_Id in", values, "itemFileId");
            return (Criteria) this;
        }

        public Criteria andItemFileIdNotIn(List<Integer> values) {
            addCriterion("item_file_Id not in", values, "itemFileId");
            return (Criteria) this;
        }

        public Criteria andItemFileIdBetween(Integer value1, Integer value2) {
            addCriterion("item_file_Id between", value1, value2, "itemFileId");
            return (Criteria) this;
        }

        public Criteria andItemFileIdNotBetween(Integer value1, Integer value2) {
            addCriterion("item_file_Id not between", value1, value2, "itemFileId");
            return (Criteria) this;
        }

        public Criteria andGradeIdIsNull() {
            addCriterion("grade_Id is null");
            return (Criteria) this;
        }

        public Criteria andGradeIdIsNotNull() {
            addCriterion("grade_Id is not null");
            return (Criteria) this;
        }

        public Criteria andGradeIdEqualTo(Integer value) {
            addCriterion("grade_Id =", value, "gradeId");
            return (Criteria) this;
        }

        public Criteria andGradeIdNotEqualTo(Integer value) {
            addCriterion("grade_Id <>", value, "gradeId");
            return (Criteria) this;
        }

        public Criteria andGradeIdGreaterThan(Integer value) {
            addCriterion("grade_Id >", value, "gradeId");
            return (Criteria) this;
        }

        public Criteria andGradeIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("grade_Id >=", value, "gradeId");
            return (Criteria) this;
        }

        public Criteria andGradeIdLessThan(Integer value) {
            addCriterion("grade_Id <", value, "gradeId");
            return (Criteria) this;
        }

        public Criteria andGradeIdLessThanOrEqualTo(Integer value) {
            addCriterion("grade_Id <=", value, "gradeId");
            return (Criteria) this;
        }

        public Criteria andGradeIdIn(List<Integer> values) {
            addCriterion("grade_Id in", values, "gradeId");
            return (Criteria) this;
        }

        public Criteria andGradeIdNotIn(List<Integer> values) {
            addCriterion("grade_Id not in", values, "gradeId");
            return (Criteria) this;
        }

        public Criteria andGradeIdBetween(Integer value1, Integer value2) {
            addCriterion("grade_Id between", value1, value2, "gradeId");
            return (Criteria) this;
        }

        public Criteria andGradeIdNotBetween(Integer value1, Integer value2) {
            addCriterion("grade_Id not between", value1, value2, "gradeId");
            return (Criteria) this;
        }

        public Criteria andSubjectIdIsNull() {
            addCriterion("subject_id is null");
            return (Criteria) this;
        }

        public Criteria andSubjectIdIsNotNull() {
            addCriterion("subject_id is not null");
            return (Criteria) this;
        }

        public Criteria andSubjectIdEqualTo(Integer value) {
            addCriterion("subject_id =", value, "subjectId");
            return (Criteria) this;
        }

        public Criteria andSubjectIdNotEqualTo(Integer value) {
            addCriterion("subject_id <>", value, "subjectId");
            return (Criteria) this;
        }

        public Criteria andSubjectIdGreaterThan(Integer value) {
            addCriterion("subject_id >", value, "subjectId");
            return (Criteria) this;
        }

        public Criteria andSubjectIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("subject_id >=", value, "subjectId");
            return (Criteria) this;
        }

        public Criteria andSubjectIdLessThan(Integer value) {
            addCriterion("subject_id <", value, "subjectId");
            return (Criteria) this;
        }

        public Criteria andSubjectIdLessThanOrEqualTo(Integer value) {
            addCriterion("subject_id <=", value, "subjectId");
            return (Criteria) this;
        }

        public Criteria andSubjectIdIn(List<Integer> values) {
            addCriterion("subject_id in", values, "subjectId");
            return (Criteria) this;
        }

        public Criteria andSubjectIdNotIn(List<Integer> values) {
            addCriterion("subject_id not in", values, "subjectId");
            return (Criteria) this;
        }

        public Criteria andSubjectIdBetween(Integer value1, Integer value2) {
            addCriterion("subject_id between", value1, value2, "subjectId");
            return (Criteria) this;
        }

        public Criteria andSubjectIdNotBetween(Integer value1, Integer value2) {
            addCriterion("subject_id not between", value1, value2, "subjectId");
            return (Criteria) this;
        }

        public Criteria andFileIdIsNull() {
            addCriterion("file_id is null");
            return (Criteria) this;
        }

        public Criteria andFileIdIsNotNull() {
            addCriterion("file_id is not null");
            return (Criteria) this;
        }

        public Criteria andFileIdEqualTo(Integer value) {
            addCriterion("file_id =", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdNotEqualTo(Integer value) {
            addCriterion("file_id <>", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdGreaterThan(Integer value) {
            addCriterion("file_id >", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("file_id >=", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdLessThan(Integer value) {
            addCriterion("file_id <", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdLessThanOrEqualTo(Integer value) {
            addCriterion("file_id <=", value, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdIn(List<Integer> values) {
            addCriterion("file_id in", values, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdNotIn(List<Integer> values) {
            addCriterion("file_id not in", values, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdBetween(Integer value1, Integer value2) {
            addCriterion("file_id between", value1, value2, "fileId");
            return (Criteria) this;
        }

        public Criteria andFileIdNotBetween(Integer value1, Integer value2) {
            addCriterion("file_id not between", value1, value2, "fileId");
            return (Criteria) this;
        }

        public Criteria andSectionIdIsNull() {
            addCriterion("section_id is null");
            return (Criteria) this;
        }

        public Criteria andSectionIdIsNotNull() {
            addCriterion("section_id is not null");
            return (Criteria) this;
        }

        public Criteria andSectionIdEqualTo(Integer value) {
            addCriterion("section_id =", value, "sectionId");
            return (Criteria) this;
        }

        public Criteria andSectionIdNotEqualTo(Integer value) {
            addCriterion("section_id <>", value, "sectionId");
            return (Criteria) this;
        }

        public Criteria andSectionIdGreaterThan(Integer value) {
            addCriterion("section_id >", value, "sectionId");
            return (Criteria) this;
        }

        public Criteria andSectionIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("section_id >=", value, "sectionId");
            return (Criteria) this;
        }

        public Criteria andSectionIdLessThan(Integer value) {
            addCriterion("section_id <", value, "sectionId");
            return (Criteria) this;
        }

        public Criteria andSectionIdLessThanOrEqualTo(Integer value) {
            addCriterion("section_id <=", value, "sectionId");
            return (Criteria) this;
        }

        public Criteria andSectionIdIn(List<Integer> values) {
            addCriterion("section_id in", values, "sectionId");
            return (Criteria) this;
        }

        public Criteria andSectionIdNotIn(List<Integer> values) {
            addCriterion("section_id not in", values, "sectionId");
            return (Criteria) this;
        }

        public Criteria andSectionIdBetween(Integer value1, Integer value2) {
            addCriterion("section_id between", value1, value2, "sectionId");
            return (Criteria) this;
        }

        public Criteria andSectionIdNotBetween(Integer value1, Integer value2) {
            addCriterion("section_id not between", value1, value2, "sectionId");
            return (Criteria) this;
        }

        public Criteria andItemFileNameIsNull() {
            addCriterion("item_file_name is null");
            return (Criteria) this;
        }

        public Criteria andItemFileNameIsNotNull() {
            addCriterion("item_file_name is not null");
            return (Criteria) this;
        }

        public Criteria andItemFileNameEqualTo(String value) {
            addCriterion("item_file_name =", value, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andItemFileNameNotEqualTo(String value) {
            addCriterion("item_file_name <>", value, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andItemFileNameGreaterThan(String value) {
            addCriterion("item_file_name >", value, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andItemFileNameGreaterThanOrEqualTo(String value) {
            addCriterion("item_file_name >=", value, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andItemFileNameLessThan(String value) {
            addCriterion("item_file_name <", value, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andItemFileNameLessThanOrEqualTo(String value) {
            addCriterion("item_file_name <=", value, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andItemFileNameLike(String value) {
            addCriterion("item_file_name like", value, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andItemFileNameNotLike(String value) {
            addCriterion("item_file_name not like", value, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andItemFileNameIn(List<String> values) {
            addCriterion("item_file_name in", values, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andItemFileNameNotIn(List<String> values) {
            addCriterion("item_file_name not in", values, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andItemFileNameBetween(String value1, String value2) {
            addCriterion("item_file_name between", value1, value2, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andItemFileNameNotBetween(String value1, String value2) {
            addCriterion("item_file_name not between", value1, value2, "itemFileName");
            return (Criteria) this;
        }

        public Criteria andViewCountIsNull() {
            addCriterion("view_count is null");
            return (Criteria) this;
        }

        public Criteria andViewCountIsNotNull() {
            addCriterion("view_count is not null");
            return (Criteria) this;
        }

        public Criteria andViewCountEqualTo(Integer value) {
            addCriterion("view_count =", value, "viewCount");
            return (Criteria) this;
        }

        public Criteria andViewCountNotEqualTo(Integer value) {
            addCriterion("view_count <>", value, "viewCount");
            return (Criteria) this;
        }

        public Criteria andViewCountGreaterThan(Integer value) {
            addCriterion("view_count >", value, "viewCount");
            return (Criteria) this;
        }

        public Criteria andViewCountGreaterThanOrEqualTo(Integer value) {
            addCriterion("view_count >=", value, "viewCount");
            return (Criteria) this;
        }

        public Criteria andViewCountLessThan(Integer value) {
            addCriterion("view_count <", value, "viewCount");
            return (Criteria) this;
        }

        public Criteria andViewCountLessThanOrEqualTo(Integer value) {
            addCriterion("view_count <=", value, "viewCount");
            return (Criteria) this;
        }

        public Criteria andViewCountIn(List<Integer> values) {
            addCriterion("view_count in", values, "viewCount");
            return (Criteria) this;
        }

        public Criteria andViewCountNotIn(List<Integer> values) {
            addCriterion("view_count not in", values, "viewCount");
            return (Criteria) this;
        }

        public Criteria andViewCountBetween(Integer value1, Integer value2) {
            addCriterion("view_count between", value1, value2, "viewCount");
            return (Criteria) this;
        }

        public Criteria andViewCountNotBetween(Integer value1, Integer value2) {
            addCriterion("view_count not between", value1, value2, "viewCount");
            return (Criteria) this;
        }

        public Criteria andEvaluateIsNull() {
            addCriterion("evaluate is null");
            return (Criteria) this;
        }

        public Criteria andEvaluateIsNotNull() {
            addCriterion("evaluate is not null");
            return (Criteria) this;
        }

        public Criteria andEvaluateEqualTo(Integer value) {
            addCriterion("evaluate =", value, "evaluate");
            return (Criteria) this;
        }

        public Criteria andEvaluateNotEqualTo(Integer value) {
            addCriterion("evaluate <>", value, "evaluate");
            return (Criteria) this;
        }

        public Criteria andEvaluateGreaterThan(Integer value) {
            addCriterion("evaluate >", value, "evaluate");
            return (Criteria) this;
        }

        public Criteria andEvaluateGreaterThanOrEqualTo(Integer value) {
            addCriterion("evaluate >=", value, "evaluate");
            return (Criteria) this;
        }

        public Criteria andEvaluateLessThan(Integer value) {
            addCriterion("evaluate <", value, "evaluate");
            return (Criteria) this;
        }

        public Criteria andEvaluateLessThanOrEqualTo(Integer value) {
            addCriterion("evaluate <=", value, "evaluate");
            return (Criteria) this;
        }

        public Criteria andEvaluateIn(List<Integer> values) {
            addCriterion("evaluate in", values, "evaluate");
            return (Criteria) this;
        }

        public Criteria andEvaluateNotIn(List<Integer> values) {
            addCriterion("evaluate not in", values, "evaluate");
            return (Criteria) this;
        }

        public Criteria andEvaluateBetween(Integer value1, Integer value2) {
            addCriterion("evaluate between", value1, value2, "evaluate");
            return (Criteria) this;
        }

        public Criteria andEvaluateNotBetween(Integer value1, Integer value2) {
            addCriterion("evaluate not between", value1, value2, "evaluate");
            return (Criteria) this;
        }

        public Criteria andResourceFromIsNull() {
            addCriterion("resource_from is null");
            return (Criteria) this;
        }

        public Criteria andResourceFromIsNotNull() {
            addCriterion("resource_from is not null");
            return (Criteria) this;
        }

        public Criteria andResourceFromEqualTo(String value) {
            addCriterion("resource_from =", value, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andResourceFromNotEqualTo(String value) {
            addCriterion("resource_from <>", value, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andResourceFromGreaterThan(String value) {
            addCriterion("resource_from >", value, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andResourceFromGreaterThanOrEqualTo(String value) {
            addCriterion("resource_from >=", value, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andResourceFromLessThan(String value) {
            addCriterion("resource_from <", value, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andResourceFromLessThanOrEqualTo(String value) {
            addCriterion("resource_from <=", value, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andResourceFromLike(String value) {
            addCriterion("resource_from like", value, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andResourceFromNotLike(String value) {
            addCriterion("resource_from not like", value, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andResourceFromIn(List<String> values) {
            addCriterion("resource_from in", values, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andResourceFromNotIn(List<String> values) {
            addCriterion("resource_from not in", values, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andResourceFromBetween(String value1, String value2) {
            addCriterion("resource_from between", value1, value2, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andResourceFromNotBetween(String value1, String value2) {
            addCriterion("resource_from not between", value1, value2, "resourceFrom");
            return (Criteria) this;
        }

        public Criteria andAuthorIsNull() {
            addCriterion("author is null");
            return (Criteria) this;
        }

        public Criteria andAuthorIsNotNull() {
            addCriterion("author is not null");
            return (Criteria) this;
        }

        public Criteria andAuthorEqualTo(String value) {
            addCriterion("author =", value, "author");
            return (Criteria) this;
        }

        public Criteria andAuthorNotEqualTo(String value) {
            addCriterion("author <>", value, "author");
            return (Criteria) this;
        }

        public Criteria andAuthorGreaterThan(String value) {
            addCriterion("author >", value, "author");
            return (Criteria) this;
        }

        public Criteria andAuthorGreaterThanOrEqualTo(String value) {
            addCriterion("author >=", value, "author");
            return (Criteria) this;
        }

        public Criteria andAuthorLessThan(String value) {
            addCriterion("author <", value, "author");
            return (Criteria) this;
        }

        public Criteria andAuthorLessThanOrEqualTo(String value) {
            addCriterion("author <=", value, "author");
            return (Criteria) this;
        }

        public Criteria andAuthorLike(String value) {
            addCriterion("author like", value, "author");
            return (Criteria) this;
        }

        public Criteria andAuthorNotLike(String value) {
            addCriterion("author not like", value, "author");
            return (Criteria) this;
        }

        public Criteria andAuthorIn(List<String> values) {
            addCriterion("author in", values, "author");
            return (Criteria) this;
        }

        public Criteria andAuthorNotIn(List<String> values) {
            addCriterion("author not in", values, "author");
            return (Criteria) this;
        }

        public Criteria andAuthorBetween(String value1, String value2) {
            addCriterion("author between", value1, value2, "author");
            return (Criteria) this;
        }

        public Criteria andAuthorNotBetween(String value1, String value2) {
            addCriterion("author not between", value1, value2, "author");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceIsNull() {
            addCriterion("download_price is null");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceIsNotNull() {
            addCriterion("download_price is not null");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceEqualTo(Integer value) {
            addCriterion("download_price =", value, "downloadPrice");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceNotEqualTo(Integer value) {
            addCriterion("download_price <>", value, "downloadPrice");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceGreaterThan(Integer value) {
            addCriterion("download_price >", value, "downloadPrice");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceGreaterThanOrEqualTo(Integer value) {
            addCriterion("download_price >=", value, "downloadPrice");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceLessThan(Integer value) {
            addCriterion("download_price <", value, "downloadPrice");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceLessThanOrEqualTo(Integer value) {
            addCriterion("download_price <=", value, "downloadPrice");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceIn(List<Integer> values) {
            addCriterion("download_price in", values, "downloadPrice");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceNotIn(List<Integer> values) {
            addCriterion("download_price not in", values, "downloadPrice");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceBetween(Integer value1, Integer value2) {
            addCriterion("download_price between", value1, value2, "downloadPrice");
            return (Criteria) this;
        }

        public Criteria andDownloadPriceNotBetween(Integer value1, Integer value2) {
            addCriterion("download_price not between", value1, value2, "downloadPrice");
            return (Criteria) this;
        }

        public Criteria andEnteringDateIsNull() {
            addCriterion("entering_date is null");
            return (Criteria) this;
        }

        public Criteria andEnteringDateIsNotNull() {
            addCriterion("entering_date is not null");
            return (Criteria) this;
        }

        public Criteria andEnteringDateEqualTo(Date value) {
            addCriterionForJDBCDate("entering_date =", value, "enteringDate");
            return (Criteria) this;
        }

        public Criteria andEnteringDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("entering_date <>", value, "enteringDate");
            return (Criteria) this;
        }

        public Criteria andEnteringDateGreaterThan(Date value) {
            addCriterionForJDBCDate("entering_date >", value, "enteringDate");
            return (Criteria) this;
        }

        public Criteria andEnteringDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("entering_date >=", value, "enteringDate");
            return (Criteria) this;
        }

        public Criteria andEnteringDateLessThan(Date value) {
            addCriterionForJDBCDate("entering_date <", value, "enteringDate");
            return (Criteria) this;
        }

        public Criteria andEnteringDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("entering_date <=", value, "enteringDate");
            return (Criteria) this;
        }

        public Criteria andEnteringDateIn(List<Date> values) {
            addCriterionForJDBCDate("entering_date in", values, "enteringDate");
            return (Criteria) this;
        }

        public Criteria andEnteringDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("entering_date not in", values, "enteringDate");
            return (Criteria) this;
        }

        public Criteria andEnteringDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("entering_date between", value1, value2, "enteringDate");
            return (Criteria) this;
        }

        public Criteria andEnteringDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("entering_date not between", value1, value2, "enteringDate");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }

        public Criteria andItemFileNameLikeInsensitive(String value) {
            addCriterion("upper(item_file_name) like", value.toUpperCase(), "itemFileName");
            return this;
        }

        public Criteria andResourceFromLikeInsensitive(String value) {
            addCriterion("upper(resource_from) like", value.toUpperCase(), "resourceFrom");
            return this;
        }

        public Criteria andAuthorLikeInsensitive(String value) {
            addCriterion("upper(author) like", value.toUpperCase(), "author");
            return this;
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}