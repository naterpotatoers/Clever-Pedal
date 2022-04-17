from gpiozero import Button
from IndicatorLight import IndicatorLight
lightsys = IndicatorLight()
button = Button(2)

def ButtonPressed():
    button.wait_for_press()
    print("MWERGENCYYYPressed")
    button.wait_for_release()
    lightsys.Emergency
    return True

while True:
    ButtonPressed()