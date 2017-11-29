#include <Servo.h>
Servo pjwservo;
int serPin = 2;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pjwservo.attach(serPin);
  pjwservo.write(0);
  delay(100);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available()){
    int angle = Serial.parseInt();
    pjwservo.write(angle);
    Serial.print("Sevo moves = ");
    Serial.print(angle);
  }
}
