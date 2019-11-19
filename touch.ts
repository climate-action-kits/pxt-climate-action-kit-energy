//% weight=10 color=#007A4B icon=""
namespace touch {

    export enum TouchPin {
        P0,
        P1,
        P2,
        P8,
        P12
    }

    /**
     * Function used to return actual DigitalPin from enum
     */
    function getTouchPin(pin: TouchPin): DigitalPin {
        // Read from the pin specified from arg
        switch (pin) {
            case TouchPin.P0: return DigitalPin.P0
            case TouchPin.P1: return DigitalPin.P1
            case TouchPin.P2: return DigitalPin.P2
            case TouchPin.P8: return DigitalPin.P8
            case TouchPin.P12: return DigitalPin.P12
        }
        // Default return if something goes wrong.
        return DigitalPin.P0
    }

    /**
     * Returns the value of the touch sensor at a specific pin.
     */
    //% block="on touch at $pin"
    export function getTouch(pin: TouchPin): boolean {
        // Return bool associated with the pin reading
        if (pins.digitalReadPin(getTouchPin(pin)) > 0) {
            return true
        }
        else {
            return false
        }
    }
}
