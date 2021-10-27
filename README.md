# climate-action-kit-energy
Library to interact with the Energy Climate Action Kit

This library provides functions to interface with the components of the InkSmith Energy Climate Action Kit. 

More information at https://www.inksmith.ca/pages/climate-action-kits.

Link to online teacher facing curriculum: https://inksmith.teachable.com/p/energy (for free sign up, use coupon code "ENERGYKIT" at course registration)

## Example Usage
Plot the number of taps on the touch sensor
```blocks
let count = 0;
basic.forever(function () {
    if (touch.getTap(DigitalPin.P0)) {
        count ++;
    }
    led.plotBarGraph(count % 15, 15);
});
```
Show the light level on the photoresistor, only if there's light
```blocks
basic.forever(function () {
    if (light.getLuminance(light.LightPin.P1) < light.Luminance.Dark) {
        light.displayLuminance(light.LightPin.P1);
    } else {
        basic.showIcon(IconNames.Asleep);
    };
})
```
Very basic proximity indicator
```blocks
basic.forever(function () {
    if (sonar.isSonar(sonar.Comparison.Closer, 10)) {
        basic.showIcon(IconNames.SmallSquare);
    } else {
        basic.showIcon(IconNames.Square);
    };
})
```
## Supported Targets

* for PXT/microbit

## License

MIT
