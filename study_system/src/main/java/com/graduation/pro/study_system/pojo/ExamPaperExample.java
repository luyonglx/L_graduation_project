package com.graduation.pro.study_system.pojo;

import com.graduation.pro.study_system.util.Page;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ExamPaperExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Page page;

    public ExamPaperExample() {
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

        public Criteria andExamPaperIdIsNull() {
            addCriterion("Exam_paper_id is null");
            return (Criteria) this;
        }

        public Criteria andExamPaperIdIsNotNull() {
            addCriterion("Exam_paper_id is not null");
            return (Criteria) this;
        }

        public Criteria andExamPaperIdEqualTo(Integer value) {
            addCriterion("Exam_paper_id =", value, "examPaperId");
            return (Criteria) this;
        }

        public Criteria andExamPaperIdNotEqualTo(Integer value) {
            addCriterion("Exam_paper_id <>", value, "examPaperId");
            return (Criteria) this;
        }

        public Criteria andExamPaperIdGreaterThan(Integer value) {
            addCriterion("Exam_paper_id >", value, "examPaperId");
            return (Criteria) this;
        }

        public Criteria andExamPaperIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("Exam_paper_id >=", value, "examPaperId");
            return (Criteria) this;
        }

        public Criteria andExamPaperIdLessThan(Integer value) {
            addCriterion("Exam_paper_id <", value, "examPaperId");
            return (Criteria) this;
        }

        public Criteria andExamPaperIdLessThanOrEqualTo(Integer value) {
            addCriterion("Exam_paper_id <=", value, "examPaperId");
            return (Criteria) this;
        }

        public Criteria andExamPaperIdIn(List<Integer> values) {
            addCriterion("Exam_paper_id in", values, "examPaperId");
            return (Criteria) this;
        }

        public Criteria andExamPaperIdNotIn(List<Integer> values) {
            addCriterion("Exam_paper_id not in", values, "examPaperId");
            return (Criteria) this;
        }

        public Criteria andExamPaperIdBetween(Integer value1, Integer value2) {
            addCriterion("Exam_paper_id between", value1, value2, "examPaperId");
            return (Criteria) this;
        }

        public Criteria andExamPaperIdNotBetween(Integer value1, Integer value2) {
            addCriterion("Exam_paper_id not between", value1, value2, "examPaperId");
            return (Criteria) this;
        }

        public Criteria andCreatorIsNull() {
            addCriterion("Creator is null");
            return (Criteria) this;
        }

        public Criteria andCreatorIsNotNull() {
            addCriterion("Creator is not null");
            return (Criteria) this;
        }

        public Criteria andCreatorEqualTo(String value) {
            addCriterion("Creator =", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorNotEqualTo(String value) {
            addCriterion("Creator <>", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorGreaterThan(String value) {
            addCriterion("Creator >", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorGreaterThanOrEqualTo(String value) {
            addCriterion("Creator >=", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorLessThan(String value) {
            addCriterion("Creator <", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorLessThanOrEqualTo(String value) {
            addCriterion("Creator <=", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorLike(String value) {
            addCriterion("Creator like", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorNotLike(String value) {
            addCriterion("Creator not like", value, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorIn(List<String> values) {
            addCriterion("Creator in", values, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorNotIn(List<String> values) {
            addCriterion("Creator not in", values, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorBetween(String value1, String value2) {
            addCriterion("Creator between", value1, value2, "creator");
            return (Criteria) this;
        }

        public Criteria andCreatorNotBetween(String value1, String value2) {
            addCriterion("Creator not between", value1, value2, "creator");
            return (Criteria) this;
        }

        public Criteria andValueRateIsNull() {
            addCriterion("Value_Rate is null");
            return (Criteria) this;
        }

        public Criteria andValueRateIsNotNull() {
            addCriterion("Value_Rate is not null");
            return (Criteria) this;
        }

        public Criteria andValueRateEqualTo(Float value) {
            addCriterion("Value_Rate =", value, "valueRate");
            return (Criteria) this;
        }

        public Criteria andValueRateNotEqualTo(Float value) {
            addCriterion("Value_Rate <>", value, "valueRate");
            return (Criteria) this;
        }

        public Criteria andValueRateGreaterThan(Float value) {
            addCriterion("Value_Rate >", value, "valueRate");
            return (Criteria) this;
        }

        public Criteria andValueRateGreaterThanOrEqualTo(Float value) {
            addCriterion("Value_Rate >=", value, "valueRate");
            return (Criteria) this;
        }

        public Criteria andValueRateLessThan(Float value) {
            addCriterion("Value_Rate <", value, "valueRate");
            return (Criteria) this;
        }

        public Criteria andValueRateLessThanOrEqualTo(Float value) {
            addCriterion("Value_Rate <=", value, "valueRate");
            return (Criteria) this;
        }

        public Criteria andValueRateIn(List<Float> values) {
            addCriterion("Value_Rate in", values, "valueRate");
            return (Criteria) this;
        }

        public Criteria andValueRateNotIn(List<Float> values) {
            addCriterion("Value_Rate not in", values, "valueRate");
            return (Criteria) this;
        }

        public Criteria andValueRateBetween(Float value1, Float value2) {
            addCriterion("Value_Rate between", value1, value2, "valueRate");
            return (Criteria) this;
        }

        public Criteria andValueRateNotBetween(Float value1, Float value2) {
            addCriterion("Value_Rate not between", value1, value2, "valueRate");
            return (Criteria) this;
        }

        public Criteria andExamedCountIsNull() {
            addCriterion("Examed_Count is null");
            return (Criteria) this;
        }

        public Criteria andExamedCountIsNotNull() {
            addCriterion("Examed_Count is not null");
            return (Criteria) this;
        }

        public Criteria andExamedCountEqualTo(Integer value) {
            addCriterion("Examed_Count =", value, "examedCount");
            return (Criteria) this;
        }

        public Criteria andExamedCountNotEqualTo(Integer value) {
            addCriterion("Examed_Count <>", value, "examedCount");
            return (Criteria) this;
        }

        public Criteria andExamedCountGreaterThan(Integer value) {
            addCriterion("Examed_Count >", value, "examedCount");
            return (Criteria) this;
        }

        public Criteria andExamedCountGreaterThanOrEqualTo(Integer value) {
            addCriterion("Examed_Count >=", value, "examedCount");
            return (Criteria) this;
        }

        public Criteria andExamedCountLessThan(Integer value) {
            addCriterion("Examed_Count <", value, "examedCount");
            return (Criteria) this;
        }

        public Criteria andExamedCountLessThanOrEqualTo(Integer value) {
            addCriterion("Examed_Count <=", value, "examedCount");
            return (Criteria) this;
        }

        public Criteria andExamedCountIn(List<Integer> values) {
            addCriterion("Examed_Count in", values, "examedCount");
            return (Criteria) this;
        }

        public Criteria andExamedCountNotIn(List<Integer> values) {
            addCriterion("Examed_Count not in", values, "examedCount");
            return (Criteria) this;
        }

        public Criteria andExamedCountBetween(Integer value1, Integer value2) {
            addCriterion("Examed_Count between", value1, value2, "examedCount");
            return (Criteria) this;
        }

        public Criteria andExamedCountNotBetween(Integer value1, Integer value2) {
            addCriterion("Examed_Count not between", value1, value2, "examedCount");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNull() {
            addCriterion("Create_time is null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNotNull() {
            addCriterion("Create_time is not null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeEqualTo(Date value) {
            addCriterion("Create_time =", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotEqualTo(Date value) {
            addCriterion("Create_time <>", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThan(Date value) {
            addCriterion("Create_time >", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("Create_time >=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThan(Date value) {
            addCriterion("Create_time <", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThanOrEqualTo(Date value) {
            addCriterion("Create_time <=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIn(List<Date> values) {
            addCriterion("Create_time in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotIn(List<Date> values) {
            addCriterion("Create_time not in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeBetween(Date value1, Date value2) {
            addCriterion("Create_time between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotBetween(Date value1, Date value2) {
            addCriterion("Create_time not between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameIsNull() {
            addCriterion("Exam_paper_name is null");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameIsNotNull() {
            addCriterion("Exam_paper_name is not null");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameEqualTo(String value) {
            addCriterion("Exam_paper_name =", value, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameNotEqualTo(String value) {
            addCriterion("Exam_paper_name <>", value, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameGreaterThan(String value) {
            addCriterion("Exam_paper_name >", value, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameGreaterThanOrEqualTo(String value) {
            addCriterion("Exam_paper_name >=", value, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameLessThan(String value) {
            addCriterion("Exam_paper_name <", value, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameLessThanOrEqualTo(String value) {
            addCriterion("Exam_paper_name <=", value, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameLike(String value) {
            addCriterion("Exam_paper_name like", value, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameNotLike(String value) {
            addCriterion("Exam_paper_name not like", value, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameIn(List<String> values) {
            addCriterion("Exam_paper_name in", values, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameNotIn(List<String> values) {
            addCriterion("Exam_paper_name not in", values, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameBetween(String value1, String value2) {
            addCriterion("Exam_paper_name between", value1, value2, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andExamPaperNameNotBetween(String value1, String value2) {
            addCriterion("Exam_paper_name not between", value1, value2, "examPaperName");
            return (Criteria) this;
        }

        public Criteria andLimitTimeIsNull() {
            addCriterion("limit_time is null");
            return (Criteria) this;
        }

        public Criteria andLimitTimeIsNotNull() {
            addCriterion("limit_time is not null");
            return (Criteria) this;
        }

        public Criteria andLimitTimeEqualTo(Integer value) {
            addCriterion("limit_time =", value, "limitTime");
            return (Criteria) this;
        }

        public Criteria andLimitTimeNotEqualTo(Integer value) {
            addCriterion("limit_time <>", value, "limitTime");
            return (Criteria) this;
        }

        public Criteria andLimitTimeGreaterThan(Integer value) {
            addCriterion("limit_time >", value, "limitTime");
            return (Criteria) this;
        }

        public Criteria andLimitTimeGreaterThanOrEqualTo(Integer value) {
            addCriterion("limit_time >=", value, "limitTime");
            return (Criteria) this;
        }

        public Criteria andLimitTimeLessThan(Integer value) {
            addCriterion("limit_time <", value, "limitTime");
            return (Criteria) this;
        }

        public Criteria andLimitTimeLessThanOrEqualTo(Integer value) {
            addCriterion("limit_time <=", value, "limitTime");
            return (Criteria) this;
        }

        public Criteria andLimitTimeIn(List<Integer> values) {
            addCriterion("limit_time in", values, "limitTime");
            return (Criteria) this;
        }

        public Criteria andLimitTimeNotIn(List<Integer> values) {
            addCriterion("limit_time not in", values, "limitTime");
            return (Criteria) this;
        }

        public Criteria andLimitTimeBetween(Integer value1, Integer value2) {
            addCriterion("limit_time between", value1, value2, "limitTime");
            return (Criteria) this;
        }

        public Criteria andLimitTimeNotBetween(Integer value1, Integer value2) {
            addCriterion("limit_time not between", value1, value2, "limitTime");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }

        public Criteria andCreatorLikeInsensitive(String value) {
            addCriterion("upper(Creator) like", value.toUpperCase(), "creator");
            return this;
        }

        public Criteria andExamPaperNameLikeInsensitive(String value) {
            addCriterion("upper(Exam_paper_name) like", value.toUpperCase(), "examPaperName");
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