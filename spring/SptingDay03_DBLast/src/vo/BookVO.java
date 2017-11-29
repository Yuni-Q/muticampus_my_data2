package vo;

// VO == DTO == Bean
public class BookVO {
	private int bookNum;		//autoIncrement å��ȣ
	private String bookTitle;	//å����
	private String bookPub;		//���ǻ�
	private int bookPrice;		//å����
	private String bookYear;	//���ǳ⵵
//	private String year;
////////////////////////////////////////////////////////////////////////////	/
	public int getBookNum() {
		return bookNum;
	}
	public void setBookNum(int bookNum) {
		this.bookNum = bookNum;
	}
	public String getBookTitle() {
		return bookTitle;
	}
	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}
	public String getBookPub() {
		return bookPub;
	}
	public void setBookPub(String bookPub) {
		this.bookPub = bookPub;
	}
	public int getBookPrice() {
		return bookPrice;
	}
	public void setBookPrice(int bookPrice) {
		this.bookPrice = bookPrice;
	}
	public String getBookYear() {
		return bookYear;
	}
	public void setBookYear(String bookYear) {
		this.bookYear = bookYear;
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	@Override
	public String toString() {
		return "BookVO [bookNum=" + bookNum + ", bookTitle=" + bookTitle + ", bookPub=" + bookPub + ", bookPrice="
				+ bookPrice + ", bookYear=" + bookYear + "]";
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	public BookVO(int bookNum, String bookTitle, String bookPub, int bookPrice, String bookYear) {
		this.bookNum = bookNum;
		this.bookTitle = bookTitle;
		this.bookPub = bookPub;
		this.bookPrice = bookPrice;
		this.bookYear = bookYear;
	}
	public BookVO(String bookTitle, String bookPub, int bookPrice, String bookYear) {
		this.bookTitle = bookTitle;
		this.bookPub = bookPub;
		this.bookPrice = bookPrice;
		this.bookYear = bookYear;
	}
	public BookVO(){}
}	
	