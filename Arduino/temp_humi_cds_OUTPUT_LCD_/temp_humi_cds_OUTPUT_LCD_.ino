#include <Wire.h> // i2C 통신을위한라이브러리
#include <LiquidCrystal_I2C.h> // LCD 1602 I2C용라이브러리
LiquidCrystal_I2C lcd(0x3F,16,2); // 접근주소: 0x3F 또는0x27
#include <DHT11.h> // DHT11의라이브러리를포함한다
int DHT11_PIN = 4;
int pin=4;            //Signal 이 연결된 아두이노의 핀번호
DHT11 dht11(pin);        
void setup()
{
   Serial.begin(9600); //통신속도 설정
     lcd.begin();                      // initialize the lcd 
 
  // Print a message to the LCD.
  
 // lcd.print("Hello, world!");
}
 
void loop()
{
  int cdsValue = analogRead(A0);
  int err;
  float temp, humi;
  if((err=dht11.read(humi, temp))==0) //온도, 습도 읽어와서 표시
  {
    Serial.print("G001");
    Serial.print(" ");
    Serial.print("temperature:");
    Serial.print(" ");
    Serial.print(temp);
    Serial.print(" ");
    Serial.print(" humidity:");
    Serial.print(" ");
    Serial.print(humi);
    Serial.print(" ");
    Serial.print(" cds:");
    Serial.print(" ");
    Serial.println(cdsValue);

    lcd.home();
    lcd.print("t:"); 
    lcd.print(temp);  
    lcd.print(" h:");
    lcd.print(humi);
    lcd.setCursor(0,1);
    lcd.print("cds:");
    lcd.print(cdsValue);
 
       
  }
  else                                //에러일 경우 처리
  {
    Serial.println();
    Serial.print("Error No :");
    Serial.print(err);
    Serial.println(); 
    lcd.backlight();
    lcd.println();
    lcd.print("Error No :");
    lcd.print(err); 
    lcd.println();    
  }
  delay(1000);                        //1초마다 측정
}
