package controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Random;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import repository.FileDao;
import vo.FileInfoVO;

@Controller
public class FileController {
	@Autowired
	private FileDao dao;

	public void setDao(FileDao dao) {
		this.dao = dao;
	}

	/////////////////////////////////////////////////////////
	@RequestMapping("/fileList.do")
	public ModelAndView fileList() {
		ModelAndView mv = new ModelAndView();

		mv.addObject("fileList", dao.selectAll());
		mv.setViewName("file_list");// file_list.jsp

		return mv;
	}

	@RequestMapping(value = "/upload.do", method = RequestMethod.POST)
	public ModelAndView upolad(FileInfoVO fileInfo) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("upload_result"); // upload_result.jsp

		String saveDir = "c:/springFiles/";

		File dir = new File(saveDir);
		if (dir.exists() == false) {
			// 업로드 폴더가 없음녀 생성하라.
			dir.mkdir();
		}

		String savedName = saveDir + new Random().nextInt(1000000);

		// 랜덤 이름으로 빈 파일 하나 만들기
		File savedFile = new File(savedName);

		try {
			// 사용자가 업로드 한 파일을 빈 파일로 복사하기
			fileInfo.getUploadFile().transferTo(savedFile);

			// 업로드 내역을 디비에 저장하기
			// FileInfoVO fileInfo = new FileInfoVO();
			fileInfo.setOriginalName(fileInfo.getUploadFile().getOriginalFilename());
			fileInfo.setSavedPath(savedFile.getAbsolutePath());
			int result = dao.insert(fileInfo);

			mv.addObject("uploadResult", result);
		} catch (IllegalStateException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return mv;
	}

	@RequestMapping("/download.do")
	public void download(int fileNum, HttpServletResponse response) {
		FileInfoVO fileInfo = dao.select(fileNum);
		response.setContentType("application/octet-stream; charset=UTF-8");
		response.setHeader("Content-Disposition", "attachment; filename=\"" + fileInfo.getOriginalName() + "\"");

		try {
			// 읽어 들이는 stream
			FileInputStream is = new FileInputStream(fileInfo.getOriginalName());
			// 내보내는 stream
			ServletOutputStream os = response.getOutputStream();

			int date = 0;
			while ((date = is.read()) != -1) {
				os.write(date);
			}

			is.close();
			os.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}
}
