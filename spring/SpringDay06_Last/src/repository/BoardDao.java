package repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import mapper.BoardMapper;
import vo.BoardVO;
@Component
public class BoardDao {
	@Autowired
	private SqlSessionTemplate sessionTemplate;
	
	public void setSessionTemplate(SqlSessionTemplate sessionTemplate){
		this.sessionTemplate = sessionTemplate;
	}
	///////////////////////////////////////////////////////////
	public int selectTotalCount(){
		BoardMapper mapper = 
				sessionTemplate.getMapper(BoardMapper.class);
		return mapper.selectTotalCount();
	}
	public List<BoardVO> selectList(int startRow,int count){
		BoardMapper mapper = 
				sessionTemplate.getMapper(BoardMapper.class);
		Map<String, Integer> param = new HashMap<>();
		param.put("startRow", startRow);
		param.put("count", count);
		return mapper.selectList(param);
	}
	 public BoardVO select(int articleNum){
	        BoardMapper mapper = 
	                sessionTemplate.getMapper(BoardMapper.class);
	        return mapper.select(articleNum);
	    }
	
	public int insert(BoardVO article){
		BoardMapper mapper = 
				sessionTemplate.getMapper(BoardMapper.class);
		return mapper.insert(article);
	}
	 public int updateReadCount(int articleNum){
	        BoardMapper mapper = 
	                sessionTemplate.getMapper(BoardMapper.class);
	        return mapper.updateReadCount(articleNum);
	    }
	
	 public int update(BoardVO article){
			BoardMapper mapper = 
					sessionTemplate.getMapper(BoardMapper.class);
			return mapper.update(article);
	 }
}