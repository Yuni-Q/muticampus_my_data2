package test04_1;

public class Car {
	private Tire tire;
	
	
	public Car(Tire tire){
		//Car 객체 생성 시점에 의존하는 객체를 외부로부터 주입받음.
		this.tire=tire;
	}
	
	public void showCarInfo(){
		System.out.println("현재 장착 타이어:"+tire.getModel());
	}
}
