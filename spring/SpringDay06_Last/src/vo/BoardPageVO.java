package vo;

import java.util.List;

//�Խ��� �������� �� ����� �������� �� ������ ������� �뵵
public class BoardPageVO {
	private List<BoardVO> boardList;	//��Ͽ� ������ ���� �Խñ۵�
	private int currenPage;				//��� �ϴܿ� ������ ��ũ�� ���
	private int startPage;				//��� �ϴܿ� ������ ��ũ�� ���
	private int endPage;				//��� �ϴܿ� ������ ��ũ�� ���
	private int totalPage;				//��� �ϴܿ� ������ ��ũ�� ���
	public List<BoardVO> getBoardList() {
		return boardList;
	}
	public void setBoardList(List<BoardVO> boardList) {
		this.boardList = boardList;
	}
	public int getCurrenPage() {
		return currenPage;
	}
	public void setCurrenPage(int currenPage) {
		this.currenPage = currenPage;
	}
	public int getStartPage() {
		return startPage;
	}
	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}
	public int getEndPage() {
		return endPage;
	}
	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
/////////////////////////////////////////////////////////////////////////
	@Override
	public String toString() {
		return "BoardPageVO [boardList=" + boardList + ", currenPage=" + currenPage + ", startPage=" + startPage
				+ ", endPage=" + endPage + ", totalPage=" + totalPage + "]";
	}
///////////////////////////////////////////////////////////////////////////
	public BoardPageVO(List<BoardVO> boardList, int currenPage, int startPage, int endPage, int totalPage) {
		this.boardList = boardList;
		this.currenPage = currenPage;
		this.startPage = startPage;
		this.endPage = endPage;
		this.totalPage = totalPage;
	}
	public BoardPageVO() {
	}
	
}
