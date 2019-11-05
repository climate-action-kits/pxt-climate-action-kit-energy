//% weight=10 color=#007A4B icon=""
namespace touch {
    /**
     * Returns the value of the touch sensor at a specific pin.
     */
    //% block="Get touch sensor at pin $pin"
    export function getTouch(pin: DigitalPin): boolean {
        if (pins.digitalReadPin(pin) > 0) {
            return true
        }
        else {
            return false
        }
    }
}
