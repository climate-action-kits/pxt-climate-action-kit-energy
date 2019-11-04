namespace touch {
    /**
     * Returns the value of the touch sensor at a specific pin.
     */
    //% block="Read touch sensitivity at pin $pin"
    export function getTouch(pin: cak.Pin) : boolean {
        let analogPin : AnalogPin

        switch (pin) {
            case (0): analogPin = AnalogPin.P0
            case (1): analogPin = AnalogPin.P1
            case (2): analogPin = AnalogPin.P2
            case (8): analogPin = AnalogPin.P8
            case (12): analogPin = AnalogPin.P12
        }
        return (pins.analogReadPin(analogPin) > 0)
    }
}
