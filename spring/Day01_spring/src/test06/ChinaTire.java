package test06;

import org.springframework.stereotype.Component;

//ex) oracle ������ Dao
//@Component
public class ChinaTire implements Tire{
	@Override
	public String getModel() {
		// ex) oracle ������ insert ����
		return "���";
	}
}