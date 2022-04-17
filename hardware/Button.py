from gpiozero import Button
class Button:
    button = Button(2)

    def ButtonPressed(self):
        self.button.wait_for_press()
        print("Pressed")
        self.button.wait_for_release()
        return True