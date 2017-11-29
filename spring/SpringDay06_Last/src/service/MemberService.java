package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import repository.MemberDao;
import vo.MemberVO;

//회원가입에 필요한 값이 입력되지 않았거나,
//로그인 작업 시 기존 패스워드와 일치하는 아이디+패스워드를 입력하는지
//검사하는 등의 작업을 수행하는 클래스
@Component
public class MemberService {
	@Autowired

	private MemberDao dao;

	public void setDao(MemberDao dao){
		this.dao = dao;
	}
///////////////////////////////////////////////////////
	public boolean join(MemberVO member){
	//회원가입 DB에 insert 하기 전에 검사할 것 있으면 여기서 하면됨.
		if(member==null || member.getMemberId()==null || member.getMemberPw()==null || member.getPhone()==null ){
			return false;
		}else{
			dao.insert(member);
			return true;
		}
	}
	public boolean login(String inputId, String inputPw){
		MemberVO member = dao.select(inputId);
		if(member==null){
			//없는 id임
			return false;
		}else if(member.getMemberPw().equals(inputPw)==true){
			//id가 있고 패스워드가 일치
			return true;
		}else{
			//id는 있는데 패스워드 불일치
			return false;
		}
	}
}