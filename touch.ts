//% weight=10 color=#007A4B icon=""
namespace touch {
    /**
     * Returns the value of the touch sensor at a specific pin.
     */
    //% block="Read touch sensitivity at pin $pin"
    export function getTouch(pin: cak.Pin): boolean {
        let digitalPin : number
        switch (pin) {
            case (0): digitalPin = DigitalPin.P0
            case (1): digitalPin = DigitalPin.P1
            case (2): digitalPin = DigitalPin.P2
            case (8): digitalPin = DigitalPin.P8
            case (12): digitalPin = DigitalPin.P12
        }
        if (pins.digitalReadPin(digitalPin) > 0) {
            return true
        }
        else {
            return false
        }
    }
}
