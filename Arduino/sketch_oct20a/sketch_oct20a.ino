const int tiltPin = 2;
const int piezoPin = 5;
const int swPin = 7;
const int led10 = 10;
int alarmOn = 0;
int ledon = 0;
const int alarm = 2100;
void setup() {
  // put your setup code here, to run once:
  pinMode(tiltPin,INPUT);
  pinMode(swPin,INPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int tilt_ck = digitalRead(tiltPin);
  int switch_ck = digitalRead(swPin);
  if( tilt_ck == 1 && alarmOn == 0){
    tone(piezoPin,alarm);
    alarmOn = 1;
  }
  if(alarmOn == 1 && switch_ck == 0){
    digitalWrite(led10,HIGH);}
  if(alarmOn == 1 && switch_ck == 1){
    noTone(piezoPin);
    digitalWrite(led10,LOW);
    alarmOn = 0;
    tilt_ck = 0;
    }
    Serial.println(tiltPin);
    Serial.println(swPin);
 }
