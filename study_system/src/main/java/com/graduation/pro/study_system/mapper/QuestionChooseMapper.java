package com.graduation.pro.study_system.mapper;

import com.graduation.pro.study_system.pojo.QuestionChoose;
import com.graduation.pro.study_system.pojo.QuestionChooseExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface QuestionChooseMapper {
    int countByExample(QuestionChooseExample example);

    int deleteByExample(QuestionChooseExample example);

    int deleteByPrimaryKey(Integer optionId);

    int insert(QuestionChoose record);

    int insertSelective(QuestionChoose record);

    List<QuestionChoose> selectByExample(QuestionChooseExample example);

    QuestionChoose selectByPrimaryKey(Integer optionId);

    int updateByExampleSelective(@Param("record") QuestionChoose record, @Param("example") QuestionChooseExample example);

    int updateByExample(@Param("record") QuestionChoose record, @Param("example") QuestionChooseExample example);

    int updateByPrimaryKeySelective(QuestionChoose record);

    int updateByPrimaryKey(QuestionChoose record);
}