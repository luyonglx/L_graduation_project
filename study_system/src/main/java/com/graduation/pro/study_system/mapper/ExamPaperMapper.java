package com.graduation.pro.study_system.mapper;

import com.graduation.pro.study_system.pojo.ExamPaper;
import com.graduation.pro.study_system.pojo.ExamPaperExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ExamPaperMapper {
    int countByExample(ExamPaperExample example);

    int deleteByExample(ExamPaperExample example);

    int deleteByPrimaryKey(Integer examPaperId);

    int insert(ExamPaper record);

    int insertSelective(ExamPaper record);

    List<ExamPaper> selectByExample(ExamPaperExample example);

    ExamPaper selectByPrimaryKey(Integer examPaperId);

    int updateByExampleSelective(@Param("record") ExamPaper record, @Param("example") ExamPaperExample example);

    int updateByExample(@Param("record") ExamPaper record, @Param("example") ExamPaperExample example);

    int updateByPrimaryKeySelective(ExamPaper record);

    int updateByPrimaryKey(ExamPaper record);
}