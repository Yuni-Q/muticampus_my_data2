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
		
		String path = "c:/SpringFiles/"; //���ε� ������ ����Ǵ� ���
		
		File dir = new File(path);
		if(dir.exists()==false){
			//���� springFiles ������ ������ ������
			dir.mkdir();
		}
		//������ ���� ���ڷ� �̸��� �ٿ��� �� ������ �ϳ� ����.
		String savedName = path + new Random().nextInt(100000000);
		File savedFile = new File(savedName); 
		
		
		//���ε� �� ������ ��� ���� savedFile�� �ű��
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
        	//�о� ���̴� stream
			FileInputStream is = new FileInputStream("c:/springFiles/Koala.jpg");
			//�������� stream
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



