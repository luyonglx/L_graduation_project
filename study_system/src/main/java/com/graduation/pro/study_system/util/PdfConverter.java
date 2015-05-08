package com.graduation.pro.study_system.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

/*
* PDF转SWF工具  
* @author tangs  
*  
*/  
public class PdfConverter {  
   public static int convertPDF2SWF(String sourcePath, String destPath, String fileName) throws IOException {  
       //目标路径不存在则建立目标路径  
       File dest = new File(destPath);  
       if (!dest.exists()) dest.mkdirs();  
         
       //源文件不存在则返回  
       File source = new File(sourcePath);  
       if (!source.exists()) return 0;  
         
       //调用pdf2swf命令进行转换  
       String command = "f:\\Program Files\\SWFTools\\pdf2swf.exe  " 
       + sourcePath + " -s flashversion=9 -o "  + destPath+"\\"+fileName;  
       
       String command1 ="f:\\Program Files\\SWFTools\\pdf2swf.exe" + 
       " -o \"" + destPath + "\\" + fileName +
       " -s flashversion=9  -t" + sourcePath; 
      
      
       Process pro = Runtime.getRuntime().exec(command1);  
       System.out.println("执行命令");
       BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(pro.getInputStream()));  
       while (bufferedReader.readLine() != null);   
         
       try {  
           pro.waitFor();  
           System.out.println("转换成功");
       } catch (InterruptedException e) {  
           // TODO Auto-generated catch block  
           e.printStackTrace();  
       }  
         
       return pro.exitValue();  
         
   }  
     
   public static void main(String []args) throws IOException {  
       String sourcePath = "f:\\documents\\test.pdf";  
       String destPath = "f:\\documents";  
       String fileName = "test.swf";  
       PdfConverter.convertPDF2SWF(sourcePath, destPath, fileName);  
   }  
}  