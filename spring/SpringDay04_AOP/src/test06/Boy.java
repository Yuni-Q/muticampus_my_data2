package test06;

import java.util.Random;

import org.springframework.stereotype.Component;

@Component
public class Boy implements Person {
	@Override
	public void makeFood() throws Exception {
		///////////////// �ٽ� ���� ����////////////////////////////////
		System.out.println("���̸� �����.");
		if (new Random().nextBoolean())
			throw new Exception("�ҳ���");
		/////////////////////////////////////////////
		// ����Ϸ�

	}
}