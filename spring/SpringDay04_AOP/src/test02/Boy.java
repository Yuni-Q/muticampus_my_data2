package test02;

import java.util.Random;

public class Boy implements Person {
	@Override
	public void makeFood() throws Exception {
		///////////////// 핵심 관심 사항////////////////////////////////
		System.out.println("장어구이를 만든다.");
		if (new Random().nextBoolean())
			throw new Exception("불났음");
		/////////////////////////////////////////////
		// 정상완료

	}
}
