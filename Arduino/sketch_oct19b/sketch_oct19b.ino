int count = 1;
void setup() {
  // put your setup code here, to run once:
  pinMode(2,INPUT);
  pinMode(3,OUTPUT);
  pinMode(4,OUTPUT);
  pinMode(5,OUTPUT);
  

}

void loop() {
  // put your main code here, to run repeatedly:
 int val = 0;
 val = digitalRead(2);
        if(val == 1 && count == 1) {
          digitalWrite(3,HIGH);
          delay(500);
          digitalWrite(3,LOW);
          count = count + 1 ;
         } else if(val == 1 && count == 2){
            digitalWrite(4,HIGH);
          delay(500);
          digitalWrite(4,LOW);
          count = count + 1 ;
          }
          else if(val == 1 && count == 3){
            digitalWrite(5,HIGH);
          delay(500);
          digitalWrite(5,LOW);
          count = 1 ;
          }
        
        
}
