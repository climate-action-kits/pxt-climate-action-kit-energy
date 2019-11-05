enum Position {
    //% block="up"
    UP = 85,
    //% block="half up"
    HALF_UP = 40,
    //% block="middle"
    MIDDLE = 0,
    //% block="half down"
    HALF_DOWN = -40,
    //% block="down"
    DOWN = -85
}

//% weight=10 color=#01579B icon=""
namespace servos {
    /**
     * Move specified servo to the selected position
     */
    //% block
    //% blockId=servo_set block="set servo at %pin to |position: %position"
    //% weight=60
    export function setServoPosition(pin: cak.Pin, position: Position) {
        let n: number = position
        let analogPin: AnalogPin
        switch (pin) {
            case (0): analogPin = AnalogPin.P0
            case (1): analogPin = AnalogPin.P1
            case (2): analogPin = AnalogPin.P2
            case (8): analogPin = AnalogPin.P8
            case (12): analogPin = AnalogPin.P12
        }
        pins.servoWritePin(analogPin, -n + 90)
    }

    /**
     * Move specified servo back to home position
     */
    //% block
    //% blockId=servos_reset block="reset servo at %pin"
    //% weight=40
    export function resetServos(pin: cak.Pin) {
        let analogPin: AnalogPin
        switch (pin) {
            case (0): analogPin = AnalogPin.P0
            case (1): analogPin = AnalogPin.P1
            case (2): analogPin = AnalogPin.P2
            case (8): analogPin = AnalogPin.P8
            case (12): analogPin = AnalogPin.P12
        }
        pins.servoWritePin(analogPin, 90)
    }

    /**
     * Move specified servo to the given position in degrees. 
     * 0 is home, -90, 90 are the limits backward and forward
     */
    //% block
    //% blockId=servo_turn_degrees block="turn servo at %pin |degrees: %degrees"
    //% degrees.min=-90 degrees.max=90
    //% weight=60
    //% advanced=true
    export function turnServo(pin: cak.Pin, degrees: number) {

        let analogPin: AnalogPin
        switch (pin) {
            case (0): analogPin = AnalogPin.P0
            case (1): analogPin = AnalogPin.P1
            case (2): analogPin = AnalogPin.P2
            case (8): analogPin = AnalogPin.P8
            case (12): analogPin = AnalogPin.P12
        }
        pins.servoWritePin(analogPin, -degrees + 90)
    }
}
