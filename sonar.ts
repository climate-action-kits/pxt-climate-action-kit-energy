/**
 * Sonar and ping utilities
 */
//% weight=11 color=#ff6f00 icon=""
namespace sonar {
    export enum Comparison {
        //% block="closer"
        CLOSER,
        //% block="further"
        FURTHER
    }

    const UNITS = 38; //approx ms per cm as measured by ross-inksmith
    /**
     * Send a ping and get the echo time (in microseconds) as a result
     * @param trig tigger pin
     * @param echo echo pin
     * @param maxCmDistance maximum distance in centimeters (default is 500)
     */
    //% blockId=sonar_ping block="ping trig %trig|echo %echo"
    export function ping(echo: DigitalPin = cak.SONAR_ECHO, trig: DigitalPin = cak.SONAR_TRIG, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * UNITS);

        return d / UNITS;
    }

    /**
     * Takes the median of 5 samples
     */
    //% block
    //% block="check sonar distance"
    //% weight=50
    export function checkSonar(): number {
        let list = [0, 0, 0, 0, 0];

        list = list.map(() => ping()).sort();

        return list[2];
    }

    /**
     * Convenience function for testing threshold
     * @param range range in cm
     */
    //% block
    //% block="sonar is %direction than %range cm"
    //% range.defl=30 range.min=1 range.max=500
    //% weight=100
    export function isSonar(Direction: Comparison, range: number): boolean {
        let distance = checkSonar();
        switch (Direction) {
            case Direction.CLOSER: return distance < range;
            case Direction.FURTHER: return distance > range;
            default: return false;
        }
    }

    /**
     * Convenience function for nicely plotting proximity
     * @param range max range in cm
     */
    //% block
    //% block="graph proximity|max range %range cm"
    //% range.defl=30 range.min=1 range.max=500
    //% weight=100
    export function graphSonar(range: number): void {
        let prox = Math.max( range - checkSonar(), 0 );
        led.plotBarGraph(prox, range);
    }

}
