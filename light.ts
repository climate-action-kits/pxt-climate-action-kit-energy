//% weight=10 icon="\uf185"
namespace light {
    export enum Luminance {
        //% block="Intense"
        Intense = 25,
        //% block="Bright"
        Bright = 65,
        //% block="Lit"
        Lit = 100,
        //% block="Shaded"
        Shaded = 200,
        //% block="Dark"
        Dark = 400,
        //% block="Lightless"
        Lightless = 800,
    }

    /*
     * (P8 & P12 are digital only)
     */
    export enum LightPin {
        P0,
        P1,
        P2,
    }

    /*
     * Translate enum to AnalogPin
     */
    function getLightPin (pin: LightPin): AnalogPin {
        switch (pin) {
            case LightPin.P0: return AnalogPin.P0
            case LightPin.P1: return AnalogPin.P1
            case LightPin.P2: return AnalogPin.P2
            default: return AnalogPin.P0
        }
    }

    /**
     * Returns the light value from sensor. The bundled sensor reports 0 as full brightness and 500-600 
     * as darkness. Pitch black is 1000.
     */
    //% block="light level at pin $pin"
    export function getLuminance(pin: LightPin): number {
        return pins.analogReadPin( getLightPin(pin) );
    }

    /**
     * Checks luminance vs established thresholds
     */
    //% block="light level at pin $pin is $level"
    export function ifLuminance(pin: LightPin, level: Luminance): boolean {
        let lum = getLuminance(pin);
        switch (level) {
            case Luminance.Intense: return lum <= Luminance.Intense;
            case Luminance.Bright: return lum > Luminance.Intense && lum <= Luminance.Lit;
            case Luminance.Lit: return lum > Luminance.Bright && lum <= Luminance.Shaded;
            case Luminance.Shaded: return lum > Luminance.Lit && lum <= Luminance.Dark;
            case Luminance.Dark: return lum > Luminance.Shaded && lum <= Luminance.Lightless;
            case Luminance.Lightless: return lum > Luminance.Dark;
        }
    }

    /**
     * Convenience function to transform and graph luminance
     */
    //% block="display light level at %pin"
    //% weight=40
    export function displayLuminance(pin: LightPin): void {
        let lum = 1000 - getLuminance(pin);
        led.plotBarGraph(lum, 1000);
    }

}
