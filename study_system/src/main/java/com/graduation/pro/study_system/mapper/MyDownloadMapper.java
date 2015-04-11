package com.graduation.pro.study_system.mapper;

import com.graduation.pro.study_system.pojo.MyDownload;
import com.graduation.pro.study_system.pojo.MyDownloadExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MyDownloadMapper {
    int countByExample(MyDownloadExample example);

    int deleteByExample(MyDownloadExample example);

    int deleteByPrimaryKey(Integer downloadId);

    int insert(MyDownload record);

    int insertSelective(MyDownload record);

    List<MyDownload> selectByExample(MyDownloadExample example);

    MyDownload selectByPrimaryKey(Integer downloadId);

    int updateByExampleSelective(@Param("record") MyDownload record, @Param("example") MyDownloadExample example);

    int updateByExample(@Param("record") MyDownload record, @Param("example") MyDownloadExample example);

    int updateByPrimaryKeySelective(MyDownload record);

    int updateByPrimaryKey(MyDownload record);
}