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

//% weight=10 color=#ab47bc icon="" block="Servo"
namespace cakLandServos {

    export enum ServoPin{
        P0,
        P1,
        P2,
        P8,
        P12
    }

    export enum MotorPin{
        //% block="left"
        Left,
        //% block="right"
        Right
    }

    export enum Power {
        //% block="off"
        Off = 0,
        //% block="on"
        On = 1,
    }

    /**
     * Enable a motor pin for access to 5v instead of the 3.3v on the rest of the breakout board
     */
    //% block
    //% blockId=servo_set block="turn %side motor + pin %state"
    //% weight=100
    export function motorPinPower (side: MotorPin, state: Power): void {
        let pin : DigitalPin;
        // Pick a pin
        switch (side) {
            case MotorPin.Left: pin = cakEnergy.M1_POS; break;
            case MotorPin.Right: pin = cakEnergy.M2_POS; break;
            default: pin = null; break;
        }
        if (pin) {
            pins.digitalWritePin(pin, state);
        }
    }

    /**
     * Function used to return actual AnalogPin from enum
     */
    function getServoPin(pin: ServoPin): AnalogPin {
        // Read from the pin specified from arg
        switch (pin) {
            case ServoPin.P0: return AnalogPin.P0
            case ServoPin.P1: return AnalogPin.P1
            case ServoPin.P2: return AnalogPin.P2
            case ServoPin.P8: return AnalogPin.P8
            case ServoPin.P12: return AnalogPin.P12
        }
        // Default return if something goes wrong.
        return AnalogPin.P0
    }

    /**
     * Move specified servo to the selected position
     */
    //% block
    //% blockId=servo_set block="set servo at %pin to |position: %position"
    //% weight=60
    export function setServoPosition(pin: ServoPin, position: Position) {
        let n: number = position
        pins.servoWritePin(getServoPin(pin), -n + 90)
    }

    /**
     * Move specified servo back to home position
     */
    //% block
    //% blockId=servos_reset block="reset servo at %pin"
    //% weight=40
    export function resetServos(pin: ServoPin) {
        pins.servoWritePin(getServoPin(pin), 90)
    }

    /**
     * Move specified servo to the given position in degrees. 
     * 0 is home, -90, 90 are the limits backward and forward
     */
    //% block
    //% blockId=servo_turn_degrees block="turn servo at %pin to |degrees: %degrees"
    //% degrees.min=-90 degrees.max=90
    //% weight=60
    export function turnServo(pin: ServoPin, degrees: number) {
        pins.servoWritePin(getServoPin(pin), -degrees + 90)
    }
}
