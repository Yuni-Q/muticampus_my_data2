package mapper;

import vo.MemberVO;

public interface MemberMapper {
    public int insert(MemberVO member); // 회원가입 insert
    public MemberVO select(String id); // 특정 회원 조회
}