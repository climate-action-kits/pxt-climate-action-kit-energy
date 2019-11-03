{
    // Motors
    motion.driveStraight(50)
    basic.pause(1000)
    motion.driveStraight(-50)
    basic.pause(1000)
    motion.turnLeft(50)
    basic.pause(1000)
    motion.turnRight(50)
    basic.pause(1000)
    motion.setPowers(MotorPower.OFF)

   
    // // Servos
    //servos.resetServos()
    //basic.pause(1000)
    //servos.turnLeftServo(80)
    //servos.turnRightServo(80)
    //basic.pause(1000)
    //servos.turnLeftServo(-80)
    //servos.turnRightServo(-80)
    //basic.pause(1000)
}
