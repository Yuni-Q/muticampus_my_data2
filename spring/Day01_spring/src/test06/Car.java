package test06;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

//test02�� �����ڸ� ����  ���� ��ü ���Թް�
//test02_02�� ������(setter)�� ���� ���� ��ü ���Թ���.
@Component("sonate")
public class Car {
	@Autowired
	public Tire tire;
	
	public void setTire(Tire tire){
		this.tire=tire;
	}
	public void  showCarInfo(){
		System.out.println("��������Ÿ�̾�:"+tire.getModel());
	}
}
