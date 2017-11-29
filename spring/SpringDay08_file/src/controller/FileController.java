package controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Random;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import vo.MemberVO;

@Controller
public class FileController {
	
	@RequestMapping("/uploadForm.do")
	public String uploadForm(){
		return "upload_form"; //upload_form.jsp
	}
	@RequestMapping("/upload.do")
	public ModelAndView upload(MemberVO member){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("upload_result");  //upload_result.jsp
		
		String path = "c:/SpringFiles/"; //업로드 파일이 저장되는 경로
		
		File dir = new File(path);
		if(dir.exists()==false){
			//만약 springFiles 폴더가 없으면 만들어라
			dir.mkdir();
		}
		//임의의 랜덤 숫자로 이름을 붙여서 빈 파일을 하나 만듬.
		String savedName = path + new Random().nextInt(100000000);
		File savedFile = new File(savedName); 
		
		
		//업로드 된 파일을 방금 만든 savedFile로 옮기기
		try {
			member.getMemberFile().transferTo(savedFile);
			
			mv.addObject("originalName",member.getMemberFile().getOriginalFilename());
			mv.addObject("savedName",savedName);
			
			return mv;
		} catch (IllegalStateException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return mv;
		}
		
		
	@RequestMapping("/download.do")
	 public void down(HttpServletResponse response){
		response.setContentType
        ("application/octet-stream; charset=UTF-8");
        response.setHeader
        ("Content-Disposition", "attachment; filename=\"Koalalala.jpg\"");
    
        try {
        	//읽어 들이는 stream
			FileInputStream is = new FileInputStream("c:/springFiles/Koala.jpg");
			//내보내는 stream
			ServletOutputStream os = response.getOutputStream();
			
			int date=0;
			while((date=is.read())!= -1){
				os.write(date);
			}
			
			is.close();
			os.close();
        } catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
	}
}



