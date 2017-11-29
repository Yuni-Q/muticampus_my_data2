package su1;

import java.util.Scanner;

public class Test02 {
	   static int n, m, arr[][], min;

	   public static void dfs(int x, int y, int mi) {
	      System.out.println("("+x+","+y+")탐색중, min="+mi);
	      // 도착지      
	      if (x == n-1 && y == m-1) {
	         if (min > mi)
	            min = mi;
	         return;
	      }

	      arr[x][y] = 0;
	      
	      // 위로 이동
	      if (x > 0 && arr[x - 1][y] != 0) {
	         dfs(x - 1, y, mi + 1);
	      }
	      // 아래
	      if (x < n - 1 && arr[x + 1][y] != 0) {
	         dfs(x + 1, y, mi + 1);
	      }
	      // 오른쪽
	      if (y < n - 1 && arr[x][y + 1] != 0) {
	         dfs(x, y + 1, mi + 1);
	      }
	      // 왼쪽
	      if (y > 0 && arr[x][y - 1] != 0) {
	         dfs(x, y - 1, mi + 1);
	      }

	      arr[x][y] = 1;
	   }

	   public static void main(String[] args) {
	      Scanner scan = new Scanner(System.in);
	      // 배열 사이즈 입력
	      n = Integer.parseInt(scan.next());
	      m = Integer.parseInt(scan.next());

	      arr = new int[n][m];
	      min = n * m;
	      // 배열값 입력
	      for (int i = 0; i < n; i++) {
	         String line = scan.next();
	         for (int j = 0; j < m; j++)
	            arr[i][j] = (int) (line.charAt(j) - '0');
	      }
	     

	      dfs(0, 0, 1);
	      System.out.println(min);
	   }
	}