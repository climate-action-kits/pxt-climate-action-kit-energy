enum Mlevel {
    //% block="Very Wet"
    VERY_WET = 500,
    //% block="Wet"
    WET = 200,
    //% block="Dry"
    DRY = 100,
    //% block="Very Dry"
    VERY_DRY = 0
}

//% weight=13 color=#ff6700 icon=""
namespace soil {

    export enum SoilPin {
        P0,
        P1,
        P2
    }

    /**
     * Function used to return actual AnalogPin from enum
     */
    function getSoilPin(pin: SoilPin): AnalogPin {
        // Read from the pin specified from arg
        switch (pin) {
            case SoilPin.P0: return AnalogPin.P0
            case SoilPin.P1: return AnalogPin.P1
            case SoilPin.P2: return AnalogPin.P2
        }
        // Default return if something goes wrong.
        return AnalogPin.P0
    }

    /**
     * Returns the value of the moisture sensor at a specific pin.
     */
    //% block="moisture level at pin $pin"
    export function getMoisture(pin: SoilPin): number {
        return pins.analogReadPin(getSoilPin(pin))
    }


    /**
     * Runs a specific function if the moisture value is below the selected moisture level
     */
    //% block="on moisture level at $pin is below $mlevel"
    export function ifMoisture(pin: SoilPin, mlevel: Mlevel, handler: () => void) {
        let moistureLevel = getMoisture(pin)
        if (moistureLevel <= mlevel) {
            handler()
        }


    }

    /**
     * Displays the read moisture level on a vertical bar graph up to full scale.
     */
    //% block="display moisture level at %pin"
    //% weight=40
    export function displayMoisture(pin: SoilPin): void {
        led.plotBarGraph(getMoisture(pin), 800)
    }

}
