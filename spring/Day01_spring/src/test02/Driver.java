package test02;

public class Driver {
	public static void main(String[] args) {
		KoreaTire koreaTire = new KoreaTire();
		ChinaTire chinaTire = new ChinaTire();
		Car myCar = new Car(chinaTire);
	}
}
