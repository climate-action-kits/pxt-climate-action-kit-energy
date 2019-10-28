enum Pin {
    P0,
    P1,
    P2,
    P8,
    P12
}

enum Mlevel {
    //% block="Very Wet"
    very_wet,
    //% block="Wet"
    wet,
    //% block="Neutral"
    neutral,
    //% block="Dry"
    dry,
    //% block="Very Dry"
    very_dry
}

namespace mositure {
    /**
     * Returns the value of the moisture sensor at a specific pin.
     */
    //% block="Read moisture level at pin $pin"
    export function getMoisture(pin: Pin) {
        // TODO: Return the pin reading at the listed pin.
    }

    //% block="If moisture level at $pin is $mlevel then..."
    export function ifMoisture(pin: Pin, mlevel: Mlevel) {
        // TODO: Create a callback after verifying it is the level specified
    }
}
