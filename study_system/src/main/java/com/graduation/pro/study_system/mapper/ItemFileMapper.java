package com.graduation.pro.study_system.mapper;

import com.graduation.pro.study_system.pojo.ItemFile;
import com.graduation.pro.study_system.pojo.ItemFileExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ItemFileMapper {
    int countByExample(ItemFileExample example);

    int deleteByExample(ItemFileExample example);

    int deleteByPrimaryKey(Integer itemFileId);

    int insert(ItemFile record);

    int insertSelective(ItemFile record);

    List<ItemFile> selectByExample(ItemFileExample example);

    ItemFile selectByPrimaryKey(Integer itemFileId);

    int updateByExampleSelective(@Param("record") ItemFile record, @Param("example") ItemFileExample example);

    int updateByExample(@Param("record") ItemFile record, @Param("example") ItemFileExample example);

    int updateByPrimaryKeySelective(ItemFile record);

    int updateByPrimaryKey(ItemFile record);
}