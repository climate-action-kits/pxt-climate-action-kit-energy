enum Pin {
    P0,
    P1,
    P2,
    P8,
    P12
}

enum Mlevel {
    //% block="Very Wet"
    VERY_WET,
    //% block="Wet"
    WET,
    //% block="Neutral"
    NEUTRAL,
    //% block="Dry"
    DRY,
    //% block="Very Dry"
    VERY_DRY
}

namespace mositure {
    /**
     * Returns the value of the moisture sensor at a specific pin.
     */
    //% block="Read moisture level at pin $pin"
    export function getMoisture(pin: Pin) {
        // TODO: Return the pin reading at the listed pin.
    }

    //% block="If moisture level at $pin is $mlevel"
    export function ifMoisture(pin: Pin, mlevel: Mlevel, handler: () => void) {
        // TODO: Create a callback after verifying it is the level specified
    }
}
