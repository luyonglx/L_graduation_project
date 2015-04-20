package com.graduation.pro.study_system.mapper;

import com.graduation.pro.study_system.pojo.ExampaperToQuestionsExample;
import com.graduation.pro.study_system.pojo.ExampaperToQuestionsKey;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ExampaperToQuestionsMapper {
    int countByExample(ExampaperToQuestionsExample example);

    int deleteByExample(ExampaperToQuestionsExample example);

    int deleteByPrimaryKey(ExampaperToQuestionsKey key);

    int insert(ExampaperToQuestionsKey record);

    int insertSelective(ExampaperToQuestionsKey record);

    List<ExampaperToQuestionsKey> selectByExample(ExampaperToQuestionsExample example);

    int updateByExampleSelective(@Param("record") ExampaperToQuestionsKey record, @Param("example") ExampaperToQuestionsExample example);

    int updateByExample(@Param("record") ExampaperToQuestionsKey record, @Param("example") ExampaperToQuestionsExample example);
}