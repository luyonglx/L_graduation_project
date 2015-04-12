package com.graduation.pro.study_system.pojo;

import com.graduation.pro.study_system.util.Page;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AnswerSheetExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Page page;

    public AnswerSheetExample() {
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

        public Criteria andAnswerSheetIdIsNull() {
            addCriterion("answer_sheet_id is null");
            return (Criteria) this;
        }

        public Criteria andAnswerSheetIdIsNotNull() {
            addCriterion("answer_sheet_id is not null");
            return (Criteria) this;
        }

        public Criteria andAnswerSheetIdEqualTo(Integer value) {
            addCriterion("answer_sheet_id =", value, "answerSheetId");
            return (Criteria) this;
        }

        public Criteria andAnswerSheetIdNotEqualTo(Integer value) {
            addCriterion("answer_sheet_id <>", value, "answerSheetId");
            return (Criteria) this;
        }

        public Criteria andAnswerSheetIdGreaterThan(Integer value) {
            addCriterion("answer_sheet_id >", value, "answerSheetId");
            return (Criteria) this;
        }

        public Criteria andAnswerSheetIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("answer_sheet_id >=", value, "answerSheetId");
            return (Criteria) this;
        }

        public Criteria andAnswerSheetIdLessThan(Integer value) {
            addCriterion("answer_sheet_id <", value, "answerSheetId");
            return (Criteria) this;
        }

        public Criteria andAnswerSheetIdLessThanOrEqualTo(Integer value) {
            addCriterion("answer_sheet_id <=", value, "answerSheetId");
            return (Criteria) this;
        }

        public Criteria andAnswerSheetIdIn(List<Integer> values) {
            addCriterion("answer_sheet_id in", values, "answerSheetId");
            return (Criteria) this;
        }

        public Criteria andAnswerSheetIdNotIn(List<Integer> values) {
            addCriterion("answer_sheet_id not in", values, "answerSheetId");
            return (Criteria) this;
        }

        public Criteria andAnswerSheetIdBetween(Integer value1, Integer value2) {
            addCriterion("answer_sheet_id between", value1, value2, "answerSheetId");
            return (Criteria) this;
        }

        public Criteria andAnswerSheetIdNotBetween(Integer value1, Integer value2) {
            addCriterion("answer_sheet_id not between", value1, value2, "answerSheetId");
            return (Criteria) this;
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

        public Criteria andUseridIsNull() {
            addCriterion("userid is null");
            return (Criteria) this;
        }

        public Criteria andUseridIsNotNull() {
            addCriterion("userid is not null");
            return (Criteria) this;
        }

        public Criteria andUseridEqualTo(Integer value) {
            addCriterion("userid =", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridNotEqualTo(Integer value) {
            addCriterion("userid <>", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridGreaterThan(Integer value) {
            addCriterion("userid >", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridGreaterThanOrEqualTo(Integer value) {
            addCriterion("userid >=", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridLessThan(Integer value) {
            addCriterion("userid <", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridLessThanOrEqualTo(Integer value) {
            addCriterion("userid <=", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridIn(List<Integer> values) {
            addCriterion("userid in", values, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridNotIn(List<Integer> values) {
            addCriterion("userid not in", values, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridBetween(Integer value1, Integer value2) {
            addCriterion("userid between", value1, value2, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridNotBetween(Integer value1, Integer value2) {
            addCriterion("userid not between", value1, value2, "userid");
            return (Criteria) this;
        }

        public Criteria andExamTimeIsNull() {
            addCriterion("Exam_time is null");
            return (Criteria) this;
        }

        public Criteria andExamTimeIsNotNull() {
            addCriterion("Exam_time is not null");
            return (Criteria) this;
        }

        public Criteria andExamTimeEqualTo(Date value) {
            addCriterion("Exam_time =", value, "examTime");
            return (Criteria) this;
        }

        public Criteria andExamTimeNotEqualTo(Date value) {
            addCriterion("Exam_time <>", value, "examTime");
            return (Criteria) this;
        }

        public Criteria andExamTimeGreaterThan(Date value) {
            addCriterion("Exam_time >", value, "examTime");
            return (Criteria) this;
        }

        public Criteria andExamTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("Exam_time >=", value, "examTime");
            return (Criteria) this;
        }

        public Criteria andExamTimeLessThan(Date value) {
            addCriterion("Exam_time <", value, "examTime");
            return (Criteria) this;
        }

        public Criteria andExamTimeLessThanOrEqualTo(Date value) {
            addCriterion("Exam_time <=", value, "examTime");
            return (Criteria) this;
        }

        public Criteria andExamTimeIn(List<Date> values) {
            addCriterion("Exam_time in", values, "examTime");
            return (Criteria) this;
        }

        public Criteria andExamTimeNotIn(List<Date> values) {
            addCriterion("Exam_time not in", values, "examTime");
            return (Criteria) this;
        }

        public Criteria andExamTimeBetween(Date value1, Date value2) {
            addCriterion("Exam_time between", value1, value2, "examTime");
            return (Criteria) this;
        }

        public Criteria andExamTimeNotBetween(Date value1, Date value2) {
            addCriterion("Exam_time not between", value1, value2, "examTime");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStIsNull() {
            addCriterion("Answer_ids_st is null");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStIsNotNull() {
            addCriterion("Answer_ids_st is not null");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStEqualTo(String value) {
            addCriterion("Answer_ids_st =", value, "answerIdsSt");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStNotEqualTo(String value) {
            addCriterion("Answer_ids_st <>", value, "answerIdsSt");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStGreaterThan(String value) {
            addCriterion("Answer_ids_st >", value, "answerIdsSt");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStGreaterThanOrEqualTo(String value) {
            addCriterion("Answer_ids_st >=", value, "answerIdsSt");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStLessThan(String value) {
            addCriterion("Answer_ids_st <", value, "answerIdsSt");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStLessThanOrEqualTo(String value) {
            addCriterion("Answer_ids_st <=", value, "answerIdsSt");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStLike(String value) {
            addCriterion("Answer_ids_st like", value, "answerIdsSt");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStNotLike(String value) {
            addCriterion("Answer_ids_st not like", value, "answerIdsSt");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStIn(List<String> values) {
            addCriterion("Answer_ids_st in", values, "answerIdsSt");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStNotIn(List<String> values) {
            addCriterion("Answer_ids_st not in", values, "answerIdsSt");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStBetween(String value1, String value2) {
            addCriterion("Answer_ids_st between", value1, value2, "answerIdsSt");
            return (Criteria) this;
        }

        public Criteria andAnswerIdsStNotBetween(String value1, String value2) {
            addCriterion("Answer_ids_st not between", value1, value2, "answerIdsSt");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }

        public Criteria andAnswerIdsStLikeInsensitive(String value) {
            addCriterion("upper(Answer_ids_st) like", value.toUpperCase(), "answerIdsSt");
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