package test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import repository.BookDao;
import vo.BookVO;

public class Test {
	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("/test/applicationContext.xml");

		BookDao dao = context.getBean("bookDao", BookDao.class);

		System.out.println("dao:"+dao);
		for (BookVO b : dao.selectBookListAll()) {
			System.out.println(b);
		}
	}
}
