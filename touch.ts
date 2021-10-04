//% weight=10 color=#007A4B icon="\uf863"
namespace touch {

    export enum TouchPin {
        P0,
        P1,
        P2,
        P8,
        P12
    }

    let latches:TouchPin[] = [];

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
            default: return DigitalPin.P0
        }
    }

    /**
     * Flipflop style button so that only one true per press is emitted 
     */
    //% block="on tap at $pin"
    export function getTap(pin: TouchPin): boolean {
        let touch = getTouch(pin);
        if (touch && latches.indexOf(pin) === -1) {
           latches.push(pin);
           return true;
        } else if (!touch) {
            latches = latches.filter((x) => x != pin);
        }
        return false;
    }

    /**
     * Returns the value of the touch sensor at a specific pin.
     * Returns true so long as button is pressed
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
