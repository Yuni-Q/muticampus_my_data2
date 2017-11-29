package mybatis;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import mybatis.mapper.BookMapper;

public class BookDao {
	private SqlSession session;
	
	public BookDao(){
        // 마이바티스의 모든 설정 내용이 들어있는 설정파일을
        // 한번 읽어들여야 커넥션, SQL 문장 들어있는 mapper 를 사용 가능
        String resource = "mybatis/mybatis_conf.xml";
        InputStream is = null;
 
        try {
            is = Resources.getResourceAsStream(resource);
            SqlSessionFactory factory = 
                    new SqlSessionFactoryBuilder().build(is);
            session = factory.openSession();
        } catch (IOException ex) {
            System.out.println("마이바티스 설정파일 에러");
            ex.printStackTrace();
        } finally {
            try {
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
	
	public int insert(BookVO book){
		BookMapper mapper = session.getMapper(BookMapper.class);
		return mapper.insert(book);
	}
	public BookVO select(int bookNum){
		BookMapper mapper = session.getMapper(BookMapper.class);
		return mapper.selectBook(bookNum);
	}
	public List<BookVO> selectAllBook(){
		BookMapper mapper = session.getMapper(BookMapper.class);
		return mapper.selectAll();
	}
}
