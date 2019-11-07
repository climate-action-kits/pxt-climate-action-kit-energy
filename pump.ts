enum Pump {
    //% block="left"
    LEFT = 0,
    //% block="right"
    RIGHT = 1
}

//% weight=13 color=#01579b icon=""
namespace pump {

    /**
     * Start the pump
    */
    //% block
    //% blockId=pump_start block="start %pump pump at speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=45
    export function start(pump: Pump, speed: number): void {
        pumpControl(pump, speed)
    }

    /**
     * Stop the pump
     */
    //% block
    //% blockId=pump_stop block="stop %pump pump"
    //% weight=45
    export function stop(pump: Pump): void {
        pumpControl(pump, 0)
    }

    /**
     * Set a pump for a specified time at a specified speed.
     */
    //% block
    //% blockId=pump_duration block="run the %pump pump at speed %speed for %duration seconds"
    //% duration.min=0 duration.max=10
    //% speed.min=0 speed.max=100
    //% weight=45
    export function startDuration(pump: Pump, speed: number, duration: number): void {
        start(pump, speed)
        basic.pause(duration*1000)
        stop(pump)
    }

    /**
     * Advanced control of an individual pump. PWM is set to constant value.
     */
    function pumpControl(whichPump: Pump, speed: number): void {
        let pumpSpeed: number

        pumpSpeed = remapSpeed(speed)

        if (whichPump == Pump.LEFT) {
            pins.analogSetPeriod(cak.M1_PWR, 1024)
            pins.analogWritePin(cak.M1_PWR, pumpSpeed)
        } else {
            pins.analogSetPeriod(cak.M2_PWR, 1024)
            pins.analogWritePin(cak.M2_PWR, pumpSpeed)
        }
    }

    // Rescale values from 0 - 100 to 0 - 1023
    function remapSpeed(s: number): number {
        let returnSpeed: number
        if (s <= 0) {
            returnSpeed = 0
        } else if (s >= 100) {
            returnSpeed = 1023
        } else {
            returnSpeed = (23200 + (s * 791)) / 100
        }
        return returnSpeed;
    }
}
