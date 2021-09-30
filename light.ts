enum Luminance {
    //% block="Intense"
    INTENSE = 25,
    //% block="Bright"
    BRIGHT = 65,
    //% block="Lit"
    LIT = 100,
    //% block="Shaded"
    SHADED = 200,
    //% block="Dark"
    DARK = 400,
    //% block="Lightless"
    LIGHTLESS = 800,
}
    
//% weight=10 icon="🔆"
namespace light {

    export enum LightPin {
        P0,
        P1,
        P2,
        P8,
        P12
    }

    /*
     * Translate enum to AnalogPin
     */
    function getLightPin (pin: LightPin): AnalogPin {
        switch (pin) {
            case LightPin.P0: return AnalogPin.P0
            case LightPin.P1: return AnalogPin.P#
            case LightPin.P2: return AnalogPin.P2
            case LightPin.P8: return AnalogPin.P8
            case LightPin.P12: return AnalogPin.P12
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
            case Luminance.INTENSE: return lum <= Luminance.INTENSE;
            case Luminance.BRIGHT: return lum > Luminance.INTENSE && lum <= Luminance.BRIGHT;
            case Luminance.LIT: return lum > Luminance.BRIGHT && lum <= Luminance.LIT;
            case Luminance.SHADED: return lum > Luminance.LIT && lum <= Luminance.SHADED;
            case Luminance.DARK: return lum > Luminance.SHADED && lum <= Luminance.DARK;
            case Luminance.LIGHTLESS: return lum > Luminance.DARK;
        }
    }

    /**
     * Convenience function to transform and graph luminance
     */
    //% block="display moisture level at %pin"
    //% weight=40
    export function displayLuminance(pin: LightPin): void {
        let lum = 1000 - getLuminance(pin);
        led.plotBarGraph(graphDots, 1000);
    }

}
