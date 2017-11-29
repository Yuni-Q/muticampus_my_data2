package test02;

// ex) mysql 버전의 Dao
public class KoreaTire implements Tire{

	 @Override
	public String getModel() {
		// ex) mysql 문법의 insert 구현
		return "한국";
	}
}
