package test01_spring;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		// BookDao dao = new BookDao();
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
				"test01_spring/applicationContext.xml");

		BookDao dao = context.getBean("dao", BookDao.class);

		/*
		 * BookVO book = new BookVO("spring 데이터베이스","양유출판",50000,"2017");
		 * 
		 * System.out.println("insert결과:"+dao.insert(book));
		 */

		for (BookVO b : dao.selectAll()) {
			System.out.println(b.getTitle() + "/" + b.getPrice());

		}
	}

}
