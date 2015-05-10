package com.graduation.pro.study_system.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.graduation.pro.study_system.base.ExtJSResponse;
import com.graduation.pro.study_system.mapper.FilesMapper;
import com.graduation.pro.study_system.mapper.ItemFileMapper;
import com.graduation.pro.study_system.pojo.Files;
import com.graduation.pro.study_system.pojo.ItemFile;
import com.graduation.pro.study_system.pojo.ItemFileExample;
import com.graduation.pro.study_system.pojo.other.ItemFileInfoWhenAdd;
import com.graduation.pro.study_system.util.FileUtils;

@Controller
@RequestMapping("/itemFile")
public class ItemFileController {
	@Autowired
	private ItemFileMapper itemFileMapper;
	@Autowired
	private FilesMapper filesMapper;
	@RequestMapping("/list")
	public @ResponseBody ExtJSResponse list(
			@RequestParam(value="start",defaultValue="0") int start,
			@RequestParam(value="limit") int limit
			){
		ItemFileExample example=new ItemFileExample();
		//ItemFileExample.Criteria criteria=example.createCriteria();	
		List<ItemFile> list=itemFileMapper.selectByExample(example);
		return ExtJSResponse.successResWithData(list);
	}
	@RequestMapping("/listManage")
	public @ResponseBody ExtJSResponse listManage(
			@RequestParam(value="itemFileName") String itemFileName,
			@RequestParam(value="sectionId",defaultValue="0") int sectionId,
			@RequestParam(value="gradeId",defaultValue="0") int gradeId,
			@RequestParam(value="subjectId",defaultValue="0") int subjectId,
			
			@RequestParam(value="start",defaultValue="0") int start,
			@RequestParam(value="limit") int limit
			
			){
	
		ItemFileExample example=new ItemFileExample();
		ItemFileExample.Criteria criteria=example.createCriteria();
		if(itemFileName!=null && !"".equals(itemFileName))
			criteria.andItemFileNameLike("%"+itemFileName+"%");
		if(sectionId!=0)
			criteria.andSectionIdEqualTo(sectionId);
		if(gradeId!=0)
			criteria.andGradeIdEqualTo(gradeId);
		if(subjectId!=0)
			criteria.andSubjectIdEqualTo(subjectId);
		List<ItemFile> list=itemFileMapper.selectByExample(example);
		return ExtJSResponse.successResWithData(list);
	}
	@RequestMapping("/update")
	public @ResponseBody ExtJSResponse update(@RequestBody ItemFile itemFile){
		itemFileMapper.updateByPrimaryKey(itemFile);
		return ExtJSResponse.success();
	}
	@RequestMapping("/delete")
	public @ResponseBody ExtJSResponse delete(@RequestBody ItemFile itemFile){
		itemFileMapper.deleteByPrimaryKey(itemFile.getItemFileId());
		return ExtJSResponse.success();
	}
	@RequestMapping("/add")
	public @ResponseBody ExtJSResponse add(
		@RequestParam("itemFileName") String itemFileName,
		@RequestParam(value="subjectId",defaultValue="0") String subjectId,
		@RequestParam(value="gradeId",defaultValue="0") String gradeId,
		@RequestParam(value="sectionId",defaultValue="0") String sectionId,
		
		@RequestParam("resourceFrom") String resourceFrom,
		@RequestParam("author") String author,
		@RequestParam(value="downloadPrice",defaultValue="0") String downloadPrice,
		@RequestParam("itemFileDesc") String itemFileDesc,
	    @RequestParam("uploadFile") MultipartFile uploadFile){
		
		String fileName=uploadFile.getOriginalFilename();
		//保存文件到服务器
		try {
			saveFile(uploadFile.getInputStream(),"F:/documents/",fileName);
		    //保存文件信息到数据库
			Files theFile=new Files();
		    theFile.setFileName(fileName);
		    theFile.setFilePath("F:\\documents\\");
		    theFile.setSaveTime(new Date());
		    filesMapper.insert(theFile);
		    //保存itemFile
			ItemFile itemFile=new ItemFile();
		    itemFile.setDownloadPrice(Integer.parseInt(downloadPrice));
		    itemFile.setAuthor(author);
		    itemFile.setEnteringDate(new Date());
		    itemFile.setGradeId(Integer.parseInt(gradeId));
		    itemFile.setSubjectId(Integer.parseInt(subjectId));
		    itemFile.setItemFileName(itemFileName);
		    itemFile.setItemFileDesc(itemFileDesc);		
		    itemFile.setSectionId(Integer.parseInt(sectionId));
		    itemFile.setFileId(theFile.getFileId());
		    itemFileMapper.insert(itemFile);
		
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//保存itemFile
		
		
		//itemFileMapper.insert(itemFile);
		return ExtJSResponse.success();
	}
	
	
	public void saveFile(InputStream stream,String path,String filename) throws IOException
	{
		 FileOutputStream fs=new FileOutputStream(path+filename); 
	       byte[]  buffer=new byte[1024*1024];
	       int bytesum = 0;     
	          int byteread = 0;  
	            while ((byteread=stream.read())!=-1) 
	            { 
	                bytesum+=byteread; 
	                  fs.write(buffer,0,byteread);     
	                  fs.flush();     
	            } 
	            fs.close();     
	            stream.close(); 
		
	}
	
    @RequestMapping("/download")    
	public ResponseEntity<byte[]> download(String itemFileId) throws IOException {  
		    System.out.println("下载");
		    //第一步，获取资源对应的文件
		    ItemFile itemFile=itemFileMapper.selectByPrimaryKey(Integer.parseInt(itemFileId));
	        int sourceFileId=itemFile.getFileId();
	        Files theFile=filesMapper.selectByPrimaryKey(sourceFileId);
	        //资源文件路径
		    String path=theFile.getFilePath()+theFile.getFileName();
	        File file=new File(path);
	        HttpHeaders headers = new HttpHeaders();  
	        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
	        String name = theFile.getFileName();
	        String fileName=new String(name.getBytes("UTF-8"),"iso-8859-1");//为了解决中文名称乱码问题  
	        headers.setContentDispositionFormData("attachment", fileName);   
	        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);   
	        return new ResponseEntity<byte[]>(FileUtils.toByteArray(file),    
	                                          headers, HttpStatus.CREATED);    
	}  
	 
	 
	

}
