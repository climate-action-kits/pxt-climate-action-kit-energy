enum Pin {
    P0 = 0,
    P1 = 1,
    P2 = 2,
    P8 = 8,
    P12 = 12
}

enum Position {
    //% block="up"
    UP = 85,
    //% block="half up"
    HALF_UP = 40,
    //% block="middle"
    MIDDLE = 0,
    //% block="half down"
    HALF_DOWN= -40,
    //% block="down"
    DOWN = -85
}

//% weight=10 color=#01579B icon=""
namespace servos {
    /**
     * Move left servo to the selected position
     */
    //% block
    //% blockId=servos_set block="set servo at %pin to |position: %position"
    //% weight=60
    export function setServoPosition(pin: Pin, position: Position) {
        // let n: number = position
        // TODO: replace bottom call to the specific pin.
        // pins.servoWritePin(k8.SERVO_1, -n + 90)
    }

    /**
     * Move specified servo back to home position
     */
    //% block
    //% blockId=servos_reset block="reset servo at %pin"
    //% weight=40
    export function resetServos(pin: Pin) {
        // TODO: replace bottom call to the specific pin.
        // pins.servoWritePin(k8.SERVO_1, 90)
        // pins.servoWritePin(k8.SERVO_2, 90)
    }

    /**
     * Move specified servo to the given position in degrees. 
     * 0 is home, -90, 90 are the limits backward and forward
     */
    //% block
    //% blockId=servos_turn_degrees block="turn servo at %pin |degrees: %degrees"
    //% degrees.min=-90 degrees.max=90
    //% weight=60
    //% advanced=true
     export function turnServo(pin: Pin, degrees: number) {
        // TODO: Write to the specified pin the same code below.
        // pins.servoWritePin(k8.SERVO_1, -degrees + 90)
    }

}
