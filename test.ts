{
    const DURATION = 10 * 1000; //10 seconds
    // Motors
    basic.pause(1000)
    basic.pause(1000)
    motor.turnLeft(50)
    basic.pause(1000)
    motor.turnRight(50)
    basic.pause(1000)
    motor.setPowers(MotorPower.OFF)

   
    // // Servos
    //servos.resetServos()
    //basic.pause(1000)
    //servos.turnLeftServo(80)
    //servos.turnRightServo(80)
    //basic.pause(1000)
    //servos.turnLeftServo(-80)
    //servos.turnRightServo(-80)
    //basic.pause(1000)

    // Photoresistor (light.ts)
    let lum1 = light.getLuminance(light.LightPin.P0);
    basic.showNumber(lum1);
    let lum2 = light.ifLuminance(light.LightPin.P0, light.Luminance.Bright);
    basic.showString(lum2.toString());
    let endMillis = control.millis() + DURATION;
    while (control.millis() < endMillis) {
        light.displayLuminance(light.LightPin.P0);
    }

    //Sonar (sonar.ts)
    for (let i = 0; i < 5; i++) {
        basic.showIcon(IconNames.SmallDiamond);
        if (sonar.ping()) {
            basic.showIcon(IconNames.Yes);
        } else {
            basic.showIcon(IconNames.No);
        }
    };
    for (let i = 0; i < 3; i++) {
        let range = sonar.checkSonar();
        basic.showNumber(range);
    }
    if (sonar.isSonar(sonar.Comparison.Closer, 10)) {
        basic.showIcon(IconNames.SmallSquare);
    } else {
        basic.showIcon(IconNames.Square);
    }
    endMillis = control.millis() + DURATION;
    while (control.millis() < endMillis) {
        sonar.graphSonar(15);
    }

    //Touch (touch.ts)
    endMillis = control.millis() + DURATION;
    let count = 0;
    while (control.millis() < endMillis) {
        if (touch.getTap(touch.TouchPin.P2)) {
            count++;
        }
        led.plotBarGraph(count % 15, 15);
    }

}
