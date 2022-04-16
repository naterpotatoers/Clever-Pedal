import RPi.GPIO as GPIO
import time as time

class IndicaorLight:
  def __init__(self, name, age):
    self.name = name
    self.age = age

    GPIO.setmode(GPIO.BCM)
    GPIO.setup(17, GPIO.OUT) #Power

    GPIO.setmode(GPIO.BCM)
    GPIO.setup(22, GPIO.OUT) #Left

    GPIO.setmode(GPIO.BCM)
    GPIO.setup(27, GPIO.OUT) #Right

    pwm0 = GPIO.PWM(17, 100) # GPIO18, frequency=100Hz
    pwm1 = GPIO.PWM(22, 100) # GPIO18, frequency=100Hz
    pwm2 = GPIO.PWM(27, 100) # GPIO18, frequency=100Hz

    pwm0.start(0)
    pwm1.start(0)
    pwm2.start(0)

    def DetectRight():
        pwm1.ChangeDutyCycle(10)
        time.sleep(0.5)
        pwm1.ChangeDutyCycle(0)
    
    def DetectLeft():
        pwm2.ChangeDutyCycle(10)
        time.sleep(0.5)
        pwm2.ChangeDutyCycle(0)
    
    def PowerOn():
        pwm0.ChangeDutyCycle(10)