package test02;

//ex) oracle 버전의 Dao
public class ChinaTire implements Tire{
	@Override
	public String getModel() {
		// ex) oracle 문법의 insert 구현
		return "대륙";
	}
}
