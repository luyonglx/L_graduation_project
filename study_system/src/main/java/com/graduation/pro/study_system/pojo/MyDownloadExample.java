package com.graduation.pro.study_system.pojo;

import com.graduation.pro.study_system.util.Page;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MyDownloadExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected Page page;

    public MyDownloadExample() {
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

        public Criteria andDownloadIdIsNull() {
            addCriterion("download_id is null");
            return (Criteria) this;
        }

        public Criteria andDownloadIdIsNotNull() {
            addCriterion("download_id is not null");
            return (Criteria) this;
        }

        public Criteria andDownloadIdEqualTo(Integer value) {
            addCriterion("download_id =", value, "downloadId");
            return (Criteria) this;
        }

        public Criteria andDownloadIdNotEqualTo(Integer value) {
            addCriterion("download_id <>", value, "downloadId");
            return (Criteria) this;
        }

        public Criteria andDownloadIdGreaterThan(Integer value) {
            addCriterion("download_id >", value, "downloadId");
            return (Criteria) this;
        }

        public Criteria andDownloadIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("download_id >=", value, "downloadId");
            return (Criteria) this;
        }

        public Criteria andDownloadIdLessThan(Integer value) {
            addCriterion("download_id <", value, "downloadId");
            return (Criteria) this;
        }

        public Criteria andDownloadIdLessThanOrEqualTo(Integer value) {
            addCriterion("download_id <=", value, "downloadId");
            return (Criteria) this;
        }

        public Criteria andDownloadIdIn(List<Integer> values) {
            addCriterion("download_id in", values, "downloadId");
            return (Criteria) this;
        }

        public Criteria andDownloadIdNotIn(List<Integer> values) {
            addCriterion("download_id not in", values, "downloadId");
            return (Criteria) this;
        }

        public Criteria andDownloadIdBetween(Integer value1, Integer value2) {
            addCriterion("download_id between", value1, value2, "downloadId");
            return (Criteria) this;
        }

        public Criteria andDownloadIdNotBetween(Integer value1, Integer value2) {
            addCriterion("download_id not between", value1, value2, "downloadId");
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

        public Criteria andDownloadTimeIsNull() {
            addCriterion("download_time is null");
            return (Criteria) this;
        }

        public Criteria andDownloadTimeIsNotNull() {
            addCriterion("download_time is not null");
            return (Criteria) this;
        }

        public Criteria andDownloadTimeEqualTo(Date value) {
            addCriterion("download_time =", value, "downloadTime");
            return (Criteria) this;
        }

        public Criteria andDownloadTimeNotEqualTo(Date value) {
            addCriterion("download_time <>", value, "downloadTime");
            return (Criteria) this;
        }

        public Criteria andDownloadTimeGreaterThan(Date value) {
            addCriterion("download_time >", value, "downloadTime");
            return (Criteria) this;
        }

        public Criteria andDownloadTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("download_time >=", value, "downloadTime");
            return (Criteria) this;
        }

        public Criteria andDownloadTimeLessThan(Date value) {
            addCriterion("download_time <", value, "downloadTime");
            return (Criteria) this;
        }

        public Criteria andDownloadTimeLessThanOrEqualTo(Date value) {
            addCriterion("download_time <=", value, "downloadTime");
            return (Criteria) this;
        }

        public Criteria andDownloadTimeIn(List<Date> values) {
            addCriterion("download_time in", values, "downloadTime");
            return (Criteria) this;
        }

        public Criteria andDownloadTimeNotIn(List<Date> values) {
            addCriterion("download_time not in", values, "downloadTime");
            return (Criteria) this;
        }

        public Criteria andDownloadTimeBetween(Date value1, Date value2) {
            addCriterion("download_time between", value1, value2, "downloadTime");
            return (Criteria) this;
        }

        public Criteria andDownloadTimeNotBetween(Date value1, Date value2) {
            addCriterion("download_time not between", value1, value2, "downloadTime");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
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