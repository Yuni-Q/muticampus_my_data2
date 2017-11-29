package service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import repository.BoardDao;
import vo.BoardPageVO;
import vo.BoardVO;

@Component
public class BoardService {
	@Autowired
	private BoardDao dao;

	public void setDao(BoardDao dao) {
		this.dao = dao;
	}

	///////////////////////////////////////
	// 한 페이지에 보여져야 할 것들 계산
	public BoardPageVO makePage(int page) {
		final int COUNT_PER_PAGE = 10; // 한 페이지에 게시글 10개

		// 총 게시글의 갯수 조회
		int totalArticleCount = dao.selectTotalCount();

		// 총 페이지 수 조회
		int totalPageCount = totalArticleCount / COUNT_PER_PAGE;
		if (totalArticleCount % COUNT_PER_PAGE != 0)
			totalPageCount++;
		// 화면 하단에 시작 페이지 계산
		int startPage = ((page - 1) / 10) * 10 + 1;

		// 화면 하단에 끝 페이지 계산
		int endPage = startPage + 9;
		if (totalPageCount < endPage)
			endPage = totalPageCount;

		// 데이터 베이스 limit에 사용할 숫자 계산
		int startRow = (page - 1) * COUNT_PER_PAGE;

		List<BoardVO> boardList = dao.selectList(startRow, COUNT_PER_PAGE);

		BoardPageVO p = new BoardPageVO(boardList, page, startPage, endPage, totalPageCount);
		System.out.println(p);
		return p;
	}
	
	//사용자가 입력한 제목, 내용 외의 다른 항목들 채우기
	public int write(BoardVO board, HttpSession session){
		board.setReadCount(0);
		board.setWriter((String)session.getAttribute("loginId"));
		return dao.insert(board);
	}
    // 해당번호의 글을 select 하고 조회수도 증가시킴. 
    public BoardVO read(int articleNum){
        BoardVO board = dao.select(articleNum);
        if(board != null){
            // 유효한 글번호이면 조회수 증가도 같이 진행함.
            dao.updateReadCount(articleNum);
        }
        return board;
	}
    public int update(BoardVO board, HttpSession session){
		board.setReadCount(0);
		board.setWriter((String)session.getAttribute("loginId"));
		
		return dao.update(board);
	}
    
    public BoardVO readWithOutReadCount(int articleNum){
    	return dao.select(articleNum);
    }
	
	
}
