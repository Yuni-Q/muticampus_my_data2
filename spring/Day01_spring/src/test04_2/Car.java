package test04_2;

//test02는 생성자를 통해  의존 객체 주입받고
//test02_02는 생성자(setter)를 통해 의존 객체 주입받음.
public class Car {
	public Tire tire;
	
	public void setTire(Tire tire){
		this.tire=tire;
	}
	public void  showCarInfo(){
		System.out.println("현재장착타이어:"+tire.getModel());
	}
}
