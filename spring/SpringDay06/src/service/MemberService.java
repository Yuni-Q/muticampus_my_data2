package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import repository.MemberDao;
import vo.MemberVO;

//ȸ�����Կ� �ʿ��� ���� �Էµ��� �ʾҰų�,
//�α��� �۾� �� ���� �н������ ��ġ�ϴ� ���̵�+�н����带 �Է��ϴ���
//�˻��ϴ� ���� �۾��� �����ϴ� Ŭ����
@Component
public class MemberService {
	@Autowired

	private MemberDao dao;

	public void setDao(MemberDao dao){
		this.dao = dao;
	}
///////////////////////////////////////////////////////
	public boolean join(MemberVO member){
	//ȸ������ DB�� insert �ϱ� ���� �˻��� �� ������ ���⼭ �ϸ��.
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
			//���� id��
			return false;
		}else if(member.getMemberPw().equals(inputPw)==true){
			//id�� �ְ� �н����尡 ��ġ
			return true;
		}else{
			//id�� �ִµ� �н����� ����ġ
			return false;
		}
	}
}