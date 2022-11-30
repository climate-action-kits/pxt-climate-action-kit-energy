{
    const DURATION = 10 * 1000; //10 seconds
    // Motors
    basic.pause(1000)
    basic.pause(1000)
    cakEnergyMotor.turnLeft(50)
    basic.pause(1000)
    cakEnergyMotor.turnRight(50)
    basic.pause(1000)

   
    // // Servos
    //cakEnergyServos.resetServos()
    //basic.pause(1000)
    //cakEnergyServos.turnLeftServo(80)
    //cakEnergyServos.turnRightServo(80)
    //basic.pause(1000)
    //cakEnergyServos.turnLeftServo(-80)
    //cakEnergyServos.turnRightServo(-80)
    //basic.pause(1000)

    // Photoresistor (cakEnergyLight.ts)
    let lum1 = cakEnergyLight.getLuminance(cakEnergyLight.LightPin.P0);
    basic.showNumber(lum1);
    let lum2 = cakEnergyLight.ifLuminance(cakEnergyLight.LightPin.P0, cakEnergyLight.Luminance.Bright);
    basic.showString(lum2.toString());
    let endMillis = control.millis() + DURATION;
    while (control.millis() < endMillis) {
        cakEnergyLight.displayLuminance(cakEnergyLight.LightPin.P0);
    }

    //Sonar (cakEnergySonar.ts)
    for (let i = 0; i < 5; i++) {
        basic.showIcon(IconNames.SmallDiamond);
        if (cakEnergySonar.ping()) {
            basic.showIcon(IconNames.Yes);
        } else {
            basic.showIcon(IconNames.No);
        }
    };
    for (let i = 0; i < 3; i++) {
        let range = cakEnergySonar.checkSonar();
        basic.showNumber(range);
    }
    if (cakEnergySonar.isSonar(cakEnergySonar.Comparison.Closer, 10)) {
        basic.showIcon(IconNames.SmallSquare);
    } else {
        basic.showIcon(IconNames.Square);
    }
    endMillis = control.millis() + DURATION;
    while (control.millis() < endMillis) {
        cakEnergySonar.graphSonar(15);
    }

    //Touch (cakEnergyTouch.ts)
    endMillis = control.millis() + DURATION;
    let count = 0;
    while (control.millis() < endMillis) {
        if (cakEnergyTouch.getTap(cakEnergyTouch.TouchPin.P2)) {
            count++;
        }
        led.plotBarGraph(count % 15, 15);
    }

}
