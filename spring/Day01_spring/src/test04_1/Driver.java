package test04_1;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Driver {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = 
				new ClassPathXmlApplicationContext
				("test04_1/applicationContext.xml");

		Car myCar = context.getBean
				("sonata", Car.class);


		myCar.showCarInfo();
	}

}
