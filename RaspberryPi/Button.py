from gpiozero import Button
from IndicatorLight import IndicatorLight
import pygame

lightsys = IndicatorLight()
button = Button(2)

pygame.init()
Sound = pygame.mixer.Sound('emergency_sound.wav')

def ButtonPressed():
    button.wait_for_press()
    print("MWERGENCYYYPressed")
    button.wait_for_release()
    Sound.play()
    lightsys.Emergency()
    return True

while True:
    ButtonPressed()