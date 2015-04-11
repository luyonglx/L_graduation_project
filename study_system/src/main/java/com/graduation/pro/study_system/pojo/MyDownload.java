package com.graduation.pro.study_system.pojo;

import java.io.Serializable;
import java.util.Date;

public class MyDownload implements Serializable {
    private Integer downloadId;

    private Integer userid;

    private Integer itemFileId;

    private Date downloadTime;

    private static final long serialVersionUID = 1L;

    public Integer getDownloadId() {
        return downloadId;
    }

    public void setDownloadId(Integer downloadId) {
        this.downloadId = downloadId;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getItemFileId() {
        return itemFileId;
    }

    public void setItemFileId(Integer itemFileId) {
        this.itemFileId = itemFileId;
    }

    public Date getDownloadTime() {
        return downloadTime;
    }

    public void setDownloadTime(Date downloadTime) {
        this.downloadTime = downloadTime;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        MyDownload other = (MyDownload) that;
        return (this.getDownloadId() == null ? other.getDownloadId() == null : this.getDownloadId().equals(other.getDownloadId()))
            && (this.getUserid() == null ? other.getUserid() == null : this.getUserid().equals(other.getUserid()))
            && (this.getItemFileId() == null ? other.getItemFileId() == null : this.getItemFileId().equals(other.getItemFileId()))
            && (this.getDownloadTime() == null ? other.getDownloadTime() == null : this.getDownloadTime().equals(other.getDownloadTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getDownloadId() == null) ? 0 : getDownloadId().hashCode());
        result = prime * result + ((getUserid() == null) ? 0 : getUserid().hashCode());
        result = prime * result + ((getItemFileId() == null) ? 0 : getItemFileId().hashCode());
        result = prime * result + ((getDownloadTime() == null) ? 0 : getDownloadTime().hashCode());
        return result;
    }
}