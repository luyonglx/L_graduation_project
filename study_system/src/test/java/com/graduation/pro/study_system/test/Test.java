package com.graduation.pro.study_system.test;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.poi.POIXMLDocument;
import org.apache.poi.POIXMLTextExtractor;
import org.apache.poi.hwpf.extractor.WordExtractor;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFPictureData;

/**
 * POI 读取 word 2003 和 word 2007 中文字内容的测试类<br />
 * @createDate 2009-07-25
 * @author Carl He
 */
public class Test {
	//读取文本文件内容
	public static void main(String[] args) {
		try {
			////word 2003： 图片不会被读取
			InputStream is = new FileInputStream(new File("files\\2007.doc"));
			WordExtractor ex = new WordExtractor(is);//is是WORD文件的InputStream 
			String text2003 = ex.getText();
			System.out.println(text2003);
			
			String contents = "";
			StringBuffer sbf = new StringBuffer(); 
			try
			{  
			//载入文档
			OPCPackage opcPackage = 
			POIXMLDocument.openPackage("files\\a.docx"); 
			XWPFDocument xwpfd = new XWPFDocument(opcPackage); 
			POIXMLTextExtractor porEx = new XWPFWordExtractor(xwpfd); 
			//读取文字
			        contents = porEx.getText().trim(); 
			// System.out.println(ByteUtils.byteToHexString(contents.getBytes()));
			    }
			catch(Exception e){   
			       e.printStackTrace();   
			    }   
			//word 2007 图片不会被读取， 表格中的数据会被放在字符串的最后
//			OPCPackage opcPackage = POIXMLDocument.openPackage("files\\2007.docx");
//			POIXMLTextExtractor extractor = new XWPFWordExtractor(opcPackage);
//			String text2007 = extractor.getText();
//			System.out.println(text2007);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	//读取文件中的图片，并保存
	public void extractImage(File document){ 
		try
		 { 
		 String imgPath = "D:/img";
		 
		    String wordDocxPath = document.toString(); 
		//载入文档
		FileInputStream fis = 
		new FileInputStream(wordDocxPath); 
		OPCPackage opcPackage = POIXMLDocument.openPackage(wordDocxPath); 
		XWPFDocument xwpfd = new XWPFDocument(opcPackage); 
		//建立图片文件目录
		File imgFile = new File(imgPath); 
		if(!imgFile.exists()){ 
			imgFile.mkdir(); 
		} 
		//获取所图片
		    List piclist = xwpfd.getAllPictures(); 
		for(int j = 0; j < piclist.size(); j++){ 
		XWPFPictureData pic = (XWPFPictureData) piclist.get(j)  ;
		//获取图片数据流
		byte[] picbyte = pic.getData(); 
		//将图片写入本地文件
		FileOutputStream fos = new FileOutputStream(imgPath +"/"+document.getName()+j +".jpg"); 
			fos.write(picbyte); 
		    }
		} 
		catch (FileNotFoundException e) { 
			e.printStackTrace(); 
		} 
		catch (IOException e) { 
		// TODO Auto-generated catch block
		e.printStackTrace(); 
		 } 
	}
}