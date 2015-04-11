package com.graduation.pro.study_system.mapper;

import com.graduation.pro.study_system.pojo.ExamPaperToQuestionsExample;
import com.graduation.pro.study_system.pojo.ExamPaperToQuestionsKey;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ExamPaperToQuestionsMapper {
    int countByExample(ExamPaperToQuestionsExample example);

    int deleteByExample(ExamPaperToQuestionsExample example);

    int deleteByPrimaryKey(ExamPaperToQuestionsKey key);

    int insert(ExamPaperToQuestionsKey record);

    int insertSelective(ExamPaperToQuestionsKey record);

    List<ExamPaperToQuestionsKey> selectByExample(ExamPaperToQuestionsExample example);

    int updateByExampleSelective(@Param("record") ExamPaperToQuestionsKey record, @Param("example") ExamPaperToQuestionsExample example);

    int updateByExample(@Param("record") ExamPaperToQuestionsKey record, @Param("example") ExamPaperToQuestionsExample example);
}