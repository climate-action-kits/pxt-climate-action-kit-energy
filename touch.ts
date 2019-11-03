namespace touch {
    /**
     * Returns the value of the touch sensor at a specific pin.
     */
    //% block="Read touch sensitivity at pin $pin"
    export function getTouch(pin: AnalogPin) : boolean {
        return (pins.analogReadPin(pin) > 0)
    }
}
