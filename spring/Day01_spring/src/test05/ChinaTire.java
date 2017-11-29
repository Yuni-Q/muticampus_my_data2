package test05;

import org.springframework.stereotype.Component;

//ex) oracle 버전의 Dao
@Component
public class ChinaTire implements Tire{
	@Override
	public String getModel() {
		// ex) oracle 문법의 insert 구현
		return "대륙";
	}
}
