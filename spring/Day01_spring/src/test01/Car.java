package test01;

public class Car {
//	private KoreaTire tire;
	private ChinaTire tire;
	public Car(){
//		tire = new KoreaTire();
		tire = new ChinaTire();
	}
	public void showCarInfo(){
		System.out.println("현재 장착 타이어:"+tire.getModel());
		
	}
}
