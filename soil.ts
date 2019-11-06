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
     * Michael: there need to be two blocks here
     * one block should check the moisture level like the k8 IR sensor block, ie:
     * it should return a boolean depending on a dropdown of Very Dry/Dry/Wet/Very Wet (like the 
     * commented out block below?
     * Please add another block that returns moistureLevel as a value from 0-1023.
     */
    //% block="If moisture level at pin $pin is ____"
    export function getMoisture(pin: AnalogPin): Mlevel {
        let moistureLevel = pins.analogReadPin(pin)

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

      //   //% block="If moisture level at $pin is $mlevel"
      //   export function ifMoisture(pin: AnalogPin, mlevel: Mlevel, handler: () => void) {
      //       if (getMoisture(pin) > mlevel) {
      //           handler()   
      //       }
      //   }
    
        /**
    * Michael: This should display the current moisture reading to leds.
    * I hacked this together from the k8 Sonar file, I want to display the moisture level
    * from 0-1023 as an LED graph.
    */
      //  //% block
      //  //% weight=40
      // export function displayMoisture(): void {
      //     led.plotBarGraph(getMoisture(pin: AnalogPin), 1023)
      //    }
    
}
