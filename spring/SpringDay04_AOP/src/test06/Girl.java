package test06;

import java.util.Random;

import org.springframework.stereotype.Component;

@Component
public class Girl implements Person{
	@Override
	public void makeFood() throws Exception{
///////////////// 핵심 관심 사항////////////////////////////////
	System.out.println("떡볶이를 만든다.");
	if (new Random().nextBoolean())
		throw new Exception("불났음");
	/////////////////////////////////////////////
	// 정상완료
	}
}
