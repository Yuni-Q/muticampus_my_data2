package test01_spring;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component("dao")
public class BookDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	//기본 생성자
	public BookDao(){}
	
	//JdbcTemplate 전달받은 생성자
	public BookDao(JdbcTemplate jdbcTemplate){
		this.jdbcTemplate=jdbcTemplate;
	}
	//JdbcTemplate 설정자(setter)
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate){
		this.jdbcTemplate = jdbcTemplate;
	}
	///////////////////////////////////////////////////////////
	public int insert(BookVO book){
		String sql = "INSERT INTO BOOKS(TITLE,PUBLISHER,PRICE,YEAR) VALUES(?,?,?,?)";
		return jdbcTemplate.update(sql,book.getTitle(),
				book.getPublisher(),book.getPrice(),
				book.getYear());
	}
	
	public BookVO selectOne(int bookNum){
		String sql = "SELECT * FROM BOOKS WHERE BOOK_NUM";
		return jdbcTemplate.queryForObject(sql, new BookMapper(),bookNum);		
	}

	public List<BookVO> selectAll(){
		String sql = "SELECT * FROM BOOKS";
		return jdbcTemplate.query(sql, new BookMapper());
	}
	
	class BookMapper implements RowMapper<BookVO>{
		@Override
		public BookVO mapRow(ResultSet rs, int arg1) throws SQLException {
			int bookNum = rs.getInt("BOOK_NUM");
			String title = rs.getString("TITLE");
			String publisher=rs.getString("PUBLISHER");
			int price=rs.getInt("PRICE");
			String year=rs.getString("YEAR");
			
			return new BookVO(bookNum,title,publisher,price,year);
		}
	}


}








