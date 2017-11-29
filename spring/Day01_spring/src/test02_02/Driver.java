package test02_02;

public class Driver {
	public static void main(String[] args) {
		Car myCar = new Car();
		KoreaTire koreaTire = new KoreaTire();
		
		myCar.setTire(koreaTire);
		
		///////////////////////////////////////
		//타이어 객체 교체 가능
		myCar.setTire(new ChinaTire());
	}
}
