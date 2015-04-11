package com.graduation.pro.study_system.mapper;

import com.graduation.pro.study_system.pojo.Subjects;
import com.graduation.pro.study_system.pojo.SubjectsExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface SubjectsMapper {
    int countByExample(SubjectsExample example);

    int deleteByExample(SubjectsExample example);

    int deleteByPrimaryKey(Integer subjectId);

    int insert(Subjects record);

    int insertSelective(Subjects record);

    List<Subjects> selectByExample(SubjectsExample example);

    Subjects selectByPrimaryKey(Integer subjectId);

    int updateByExampleSelective(@Param("record") Subjects record, @Param("example") SubjectsExample example);

    int updateByExample(@Param("record") Subjects record, @Param("example") SubjectsExample example);

    int updateByPrimaryKeySelective(Subjects record);

    int updateByPrimaryKey(Subjects record);
}