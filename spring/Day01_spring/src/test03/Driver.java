package test03;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Driver {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = 
				new ClassPathXmlApplicationContext
					("test03/applicationContext.xml");

		Car myCar = context.getBean
				("sonata", Car.class);
		KoreaTire myTire = context.getBean
				("koreaTire", KoreaTire.class);

		myCar.setTire(myTire);// °´Ã¼ Á¶¸³

		myCar.showCarInfo();
	}

}
