int count_ledon = 0;
int read_int = 0;
int led10 = 10;
void setup() {
  // put your setup code here, to run once:
  pinMode(led10,OUTPUT);
  Serial.begin(9600);

}
int sum = 0 ;

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available()){
    read_int = Serial.parseInt();
  
  
  if(read_int==1){
    digitalWrite(led10,HIGH);
    count_ledon = count_ledon + read_int;
    Serial.print("LED ON COUNT = ");
    Serial.println(count_ledon);
  }else if(read_int == 0 ){
    digitalWrite(led10,LOW);
  }
  }
}
