package vo;

import org.springframework.web.multipart.MultipartFile;

public class FileInfoVO {
	private int fileNum;
	private String originalName;
	private String savedPath;
	private MultipartFile uploadFile;

	/////////////////////////////////////////////////////////
	public FileInfoVO() {
	}

	public FileInfoVO(int f, String o, String s) {
		fileNum = f;
		originalName = o;
		savedPath = s;
	}

	public FileInfoVO(int fileNum, String originalName, String savedPath, MultipartFile uploadFile) {
		super();
		this.fileNum = fileNum;
		this.originalName = originalName;
		this.savedPath = savedPath;
		this.uploadFile = uploadFile;
	}
	/////////////////////////////////////////////////////////
	public int getFileNum() {
		return fileNum;
	}

	public void setFileNum(int fileNum) {
		this.fileNum = fileNum;
	}

	public String getOriginalName() {
		return originalName;
	}

	public void setOriginalName(String originalName) {
		this.originalName = originalName;
	}

	public String getSavedPath() {
		return savedPath;
	}


	public void setSavedPath(String savedPath) {
		this.savedPath = savedPath;
	}

	public MultipartFile getUploadFile() {
		return uploadFile;
	}

	public void setUploadFile(MultipartFile uploadFile) {
		this.uploadFile = uploadFile;
	}

}