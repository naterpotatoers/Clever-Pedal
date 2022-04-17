import RPi.GPIO as GPIO
import time as time

class IndicatorLight:
    def __init__(self):
        print("Initalized")
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(17, GPIO.OUT) #Power

        GPIO.setmode(GPIO.BCM)
        GPIO.setup(22, GPIO.OUT) #Left

        GPIO.setmode(GPIO.BCM)
        GPIO.setup(27, GPIO.OUT) #Right

        self.pwm0 = GPIO.PWM(17, 100) # GPIO18, frequency=100Hz
        self.pwm1 = GPIO.PWM(22, 100) # GPIO18, frequency=100Hz
        self.pwm2 = GPIO.PWM(27, 100) # GPIO18, frequency=100Hz

        self.pwm0.start(0)
        self.pwm1.start(0)
        self.pwm2.start(0)

    def DetectRight(self):
        self.pwm1.ChangeDutyCycle(10)
        time.sleep(0.5)
        self.pwm1.ChangeDutyCycle(0)
    
    def DetectLeft(self):
        self.pwm2.ChangeDutyCycle(10)
        time.sleep(0.5)
        self.pwm2.ChangeDutyCycle(0)
    
    def PowerOn(self):
        self.pwm0.ChangeDutyCycle(10)

    def PowerOff(self):
        self.pwm0.ChangeDutyCycle(0)
        self.pwm1.ChangeDutyCycle(0)
        self.pwm2.ChangeDutyCycle(0)

    def Emergency(self):
        for i in range(0,3):
            self.pwm0.ChangeDutyCycle(10)
            self.pwm1.ChangeDutyCycle(10)
            self.pwm2.ChangeDutyCycle(10)
            time.sleep(0.5)
            self.pwm0.ChangeDutyCycle(0)
            self.pwm1.ChangeDutyCycle(0)
            self.pwm2.ChangeDutyCycle(0)
            time.sleep(0.5)
