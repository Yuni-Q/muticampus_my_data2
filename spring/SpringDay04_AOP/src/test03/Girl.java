package test03;

import java.util.Random;

public class Girl implements Person{
	@Override
	public void makeFood() throws Exception{
///////////////// �ٽ� ���� ����////////////////////////////////
	System.out.println("�����̸� �����.");
	if (new Random().nextBoolean())
		throw new Exception("�ҳ���");
	/////////////////////////////////////////////
	// ����Ϸ�
	}
}
