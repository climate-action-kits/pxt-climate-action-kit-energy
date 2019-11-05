enum Mlevel {
    //% block="Very Wet"
    VERY_WET = 600,
    //% block="Wet"
    WET = 450,
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
    //% block="Read moisture level at pin $pin"
    export function getMoisture(pin: cak.Pin): Mlevel {
        let analogPin: AnalogPin
        switch (pin) {
            case (0): analogPin = AnalogPin.P0
            case (1): analogPin = AnalogPin.P1
            case (2): analogPin = AnalogPin.P2
            case (8): analogPin = AnalogPin.P8
            case (12): analogPin = AnalogPin.P12
        }


        if (pin == cak.Pin.PIN_0) {

        }

        let moistureLevel = pins.analogReadPin(analogPin)


        if (moistureLevel > Mlevel.VERY_WET) {
            return Mlevel.VERY_WET
        }
        else if (moistureLevel > Mlevel.WET) {
            return Mlevel.WET
        }
        else if (moistureLevel > Mlevel.DRY) {
            return Mlevel.DRY
        }
        else {
            return Mlevel.VERY_DRY
        }
    }

    //     //% block="If moisture level at $pin is $mlevel"
    //     export function ifMoisture(pin: AnalogPin, mlevel: Mlevel, handler: () => void) {
    //         if (getMoisture(pin) > mlevel) {
    //             handler()   
    //         }
    //     }
}
