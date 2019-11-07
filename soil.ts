enum Mlevel {
    //% block="Very Wet"
    VERY_WET = 750,
    //% block="Wet"
    WET = 500,
    //% block="Dry"
    DRY = 250,
    //% block="Very Dry"
    VERY_DRY = 0
}

//% weight=13 color=#ff6700 icon=""
namespace soil {
    /**
     * Returns the value of the moisture sensor at a specific pin.
     */
    //% block="If moisture level at pin $pin is ____"
    export function getMoisture(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }


    /**
     * Runs a specific function if the moisture value is between the two passed moisture levels
     */
    //% block="If moisture level at $pin is between $mlevel and $mlevel2"
    export function ifMoisture(pin: AnalogPin, mlevel: Mlevel, mlevel2: Mlevel, handler: () => void) {
        let moistureLevel = getMoisture(pin)
        if (moistureLevel >= mlevel) {
            if (moistureLevel <= mlevel2) {
                handler()
            }
        }
        else if (moistureLevel >= mlevel2) {
            if (moistureLevel <= mlevel) {
                handler()
            }
        }
    }

    /**
     * Displays the read moisture level on the LED grid
     */
    //% block="moisture at pin %pin to LED"
    //% weight=40
    export function displayMoisture(pin: AnalogPin): void {
        led.plotBarGraph(getMoisture(pin), 1023)
    }

}
