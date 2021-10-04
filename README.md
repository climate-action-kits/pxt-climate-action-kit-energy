# energy-climate-action-kit
Library to interact with the Energy Climate Action Kit

This library provides functions to interface with the components of the InkSmith Energy Climate Action Kit. 

More information at https://www.inksmith.ca/pages/energy-climate-action-kits.

Link to online teacher facing curriculum: https://inksmith.teachable.com/p/energy (for free sign up, use coupon code "ENERGYKIT" at course registration)

## Example Usage
To drive forward, then backward
```blocks
basic.forever(() => {
    motor.turnLeft(50)
    basic.pause(1000)
    motor.turnLeft(-50)
    basic.pause(1000)
    motor.setPowers(MotorPower.OFF)
})
```
Using the touch sensor to display the current moisture level of the soil.
```blocks
basic.forever(function () {
        if (touch.getTouch(DigitalPin.P1)) {
            soil.displayMoisture(AnalogPin.P0)
      } else {
         basic.showLeds(`
             . . . . .
             . . . . .
             . . . . .
             . . . . .
             . . . . .
             `)
        }
    })
```
To oscillate servo at p0 up and down
```blocks
basic.forever(function () {
    servos.setServoPosition(AnalogPin.P0, Position.UP)
    basic.pause(1000)
    servos.setServoPosition(AnalogPin.P0, Position.DOWN)
    basic.pause(1000)
})
```
