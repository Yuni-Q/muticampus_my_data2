package mybatis;

public class Test {
	public static void main(String[] args) {
		BookDao dao = new BookDao();
		
		for(BookVO b:dao.selectAllBook()){
			System.out.println(b.getTitle()+"/"+b.getPrice());
		}
		
	}
}
