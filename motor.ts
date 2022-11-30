//% weight=13 color=#ffd43a icon="" block="Motor"
namespace cakLandMotor {
  enum Motor {
    //% block="left"
    LEFT = 0,
      //% block="right"
      RIGHT = 1
  }

  enum MotorPower {
    //% block="on"
    ON = 1,
      //% block="off"
      OFF = 0
  }

  const PWM_PERIOD = 1000; //totally arbitrary, testing showed no effect
  let motorState: MotorPower = MotorPower.ON

  /**
   *Turns the left motor at a specified speed
   */
    //% block
    //% blockId=motion_turn_left block="turn left motor at |speed: %speed"
    //% speed.min=-100 speed.max=100
    //% weight=60
    export function turnLeft(speed: number): void {
      drive(speed, 0);
    }

  /**
   *Turns the right motor at a specified speed
   */
  //% block
  //% blockId=motion_turn_right block="turn right motor at |speed: %speed"
  //% speed.min=-100 speed.max=100
  //% weight=50
  export function turnRight(speed: number): void {
    drive(0, speed);
  }

  /**
   *Stop the motors
   */
  //% block
  //% blockId=motion_stop block="stop motors"
  //% weight=45
  export function stop(): void {
    drive(0, 0);
  }

  /**
   * Control both wheels in one function.
   * Speeds range from -100 to 100.
   * Negative speeds go backwards, positive go forwards.
   */
  //% block
  //% blockId=motion_drive block="drive |left: %leftWheelSpeed|right: %rightWheelSpeed"
  //% leftWheelSpeed.min=-100 leftWheelSpeed.max=100
  //% rightWheelSpeed.min=-100 rightWheelSpeed.max=100
  //% weight=40
  export function drive(leftWheelSpeed: number, rightWheelSpeed: number): void {
    motorControl(Motor.LEFT, leftWheelSpeed)
    motorControl(Motor.RIGHT, rightWheelSpeed)
  }

  /**
   * Advanced control of an individual motor. PWM is set to constant value.
   */
  function motorControl(whichMotor: Motor, speed: number): void {
    // Pick the motor using some magic values
    let [pos, neg] = selectMotor(whichMotor);

    // drive motors
    let remappedSpeed = speed * 10;
    // forward: power to neg, reverse: power to pos
    pins.analogWritePin(neg, 1023 - Math.abs(Math.max(remappedSpeed, 0)));
    pins.analogWritePin(pos, 1023 - Math.abs(Math.min(0, remappedSpeed)));
  }

  function selectMotor(whichMotor: Motor): AnalogPin[] {
    let pos : AnalogPin, neg : AnalogPin;
    switch (whichMotor) {
      case Motor.LEFT:
        pos = cakEnergy.M1_POS;
      neg = cakEnergy.M1_NEG;
      break;
      case Motor.RIGHT:
        pos = cakEnergy.M2_POS;
      neg = cakEnergy.M2_NEG;
      break;
      default:
        pos = cakEnergy.M1_POS;
      neg = cakEnergy.M1_NEG;
      break;
    };
    return [pos, neg];
  }
}
