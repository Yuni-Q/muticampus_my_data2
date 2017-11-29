package mapper;

import java.util.List;
import java.util.Map;

import vo.BoardVO;

public interface BoardMapper {
	public int selectTotalCount(); //Ȩ �Խñ��� ����
	public List<BoardVO> selectList(Map<String, Integer> param); // �� �������� ����
	public BoardVO select(int articleNum); //�� ������ �ϳ��� �� ��ȸ
	public int updateReadCount(int articleNum); //��ȸ�� ����
	public int insert(BoardVO article); //�۾���
	public int update(BoardVO article);
}
