int potpin = 0;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(9,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  int bright = 0;
  bright = analogRead(potpin);
  analogWrite(9,bright);
  Serial.println(bright);
  delay(20);
}
