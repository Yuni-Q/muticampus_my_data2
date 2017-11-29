package vo;

import org.springframework.web.multipart.MultipartFile;

public class MemberVO {
	private String name;
	private String phone;
	private MultipartFile memberFile;

	//////////////////////////////////////////////////////////////
	public MemberVO() {
	}

	public MemberVO(String name, String phone, MultipartFile memberFile) {
		super();
		this.name = name;
		this.phone = phone;
		this.memberFile = memberFile;
	}
//////////////////////////////////////////////////////////////////
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public MultipartFile getMemberFile() {
		return memberFile;
	}

	public void setMemberFile(MultipartFile memberFile) {
		this.memberFile = memberFile;
	}
////////////////////////////////////////////////////////////////////
	@Override
	public String toString() {
		return "MemberVO [name=" + name + ", phone=" + phone + ", memberFile=" + memberFile + "]";
	}

}
