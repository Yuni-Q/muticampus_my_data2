package test02_02;

//test02�� �����ڸ� ����  ���� ��ü ���Թް�
//test02_02�� ������(setter)�� ���� ���� ��ü ���Թ���.
public class Car {
	public Tire tire;
	
	public void setTire(Tire tire){
		this.tire=tire;
	}
	public void  showCarInfo(){
		System.out.println("��������Ÿ�̾�:"+tire.getModel());
	}
}
