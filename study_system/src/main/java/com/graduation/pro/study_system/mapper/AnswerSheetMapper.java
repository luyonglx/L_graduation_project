package com.graduation.pro.study_system.mapper;

import com.graduation.pro.study_system.pojo.AnswerSheet;
import com.graduation.pro.study_system.pojo.AnswerSheetExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AnswerSheetMapper {
    int countByExample(AnswerSheetExample example);

    int deleteByExample(AnswerSheetExample example);

    int deleteByPrimaryKey(Integer answerSheetId);

    int insert(AnswerSheet record);

    int insertSelective(AnswerSheet record);

    List<AnswerSheet> selectByExample(AnswerSheetExample example);

    AnswerSheet selectByPrimaryKey(Integer answerSheetId);

    int updateByExampleSelective(@Param("record") AnswerSheet record, @Param("example") AnswerSheetExample example);

    int updateByExample(@Param("record") AnswerSheet record, @Param("example") AnswerSheetExample example);

    int updateByPrimaryKeySelective(AnswerSheet record);

    int updateByPrimaryKey(AnswerSheet record);
}