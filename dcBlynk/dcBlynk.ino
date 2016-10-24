 #include "blynk/blynk.h"

    const int motorIn1 = D6; 
    const int motorIn2 = D5;
    const int motorIn3 = D4; 
    const int motorIn4 = D3;

    char auth[] = "8f117d5b288f4214b2b07fb15b774920";

    void setup()
    {
      pinMode(motorIn1,OUTPUT);
      pinMode(motorIn2,OUTPUT);
      pinMode(motorIn3,OUTPUT); 
      pinMode(motorIn4,OUTPUT);
      Serial.begin(9600);
      delay(5000);
      Blynk.begin(auth);
    }

    void loop()
    {
      Blynk.run();
    }

    void Clockwise(int Speed)
    {
      digitalWrite(motorIn1,Speed);  
      digitalWrite(motorIn2,0);
    }

    void Counterclockwise(int Speed)
    {
      analogWrite(motorIn1,0); 
      analogWrite(motorIn2,Speed);  
    }

    void ClockWise(int Speed)
    {
      digitalWrite(motorIn3,Speed);  
      digitalWrite(motorIn4,0);
    }

    void CounterclockWise(int Speed)
    {
      analogWrite(motorIn3,0); 
      analogWrite(motorIn4,Speed);  
    }

    BLYNK_WRITE(10)
    {
      if (param.asInt()) 
      {
        Clockwise(255);
      } 
      else 
      {
        digitalWrite(motorIn1,LOW);
      }
    }
