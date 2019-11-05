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

//% weight=10 color=#ab47bc icon=""
namespace servos {
    /**
     * Move specified servo to the selected position
     */
    //% block
    //% blockId=servo_set block="set servo at %pin to |position: %position"
    //% weight=60
    export function setServoPosition(pin: AnalogPin, position: Position) {
        let n: number = position
        pins.servoWritePin(pin, -n + 90)
    }

    /**
     * Move specified servo back to home position
     */
    //% block
    //% blockId=servos_reset block="reset servo at %pin"
    //% weight=40
    export function resetServos(pin: AnalogPin) {
        pins.servoWritePin(pin, 90)
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
    export function turnServo(pin: AnalogPin, degrees: number) {
        pins.servoWritePin(pin, -degrees + 90)
    }
}
