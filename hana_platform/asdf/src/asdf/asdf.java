package asdf;

import java.util.Scanner;

public class asdf {
   public static void main(String[] args) {
      // TODO Auto-generated method stub
      Scanner sc = new Scanner(System.in);
      
      int num = sc.nextInt();
      int answer = 0;
      
      for (int i = 1; i <= num; i += 2) {
          if (num % i == 0) {
              answer++;
              System.out.println(i);
          }
      }
        
        System.out.println(answer);
   }   
}