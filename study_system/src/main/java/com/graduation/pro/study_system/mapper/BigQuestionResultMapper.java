package com.graduation.pro.study_system.mapper;

import com.graduation.pro.study_system.pojo.BigQuestionResult;
import com.graduation.pro.study_system.pojo.BigQuestionResultExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BigQuestionResultMapper {
    int countByExample(BigQuestionResultExample example);

    int deleteByExample(BigQuestionResultExample example);

    int deleteByPrimaryKey(Integer resultId);

    int insert(BigQuestionResult record);

    int insertSelective(BigQuestionResult record);

    List<BigQuestionResult> selectByExample(BigQuestionResultExample example);

    BigQuestionResult selectByPrimaryKey(Integer resultId);

    int updateByExampleSelective(@Param("record") BigQuestionResult record, @Param("example") BigQuestionResultExample example);

    int updateByExample(@Param("record") BigQuestionResult record, @Param("example") BigQuestionResultExample example);

    int updateByPrimaryKeySelective(BigQuestionResult record);

    int updateByPrimaryKey(BigQuestionResult record);
}