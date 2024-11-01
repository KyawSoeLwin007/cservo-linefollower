let Run = 0
input.onButtonPressed(Button.A, function () {
    if (Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR) < 10) {
        FW()
    } else {
        SL()
    }
})
function SL () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P4, 360)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 360)
}
function BW () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P4, 360)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 0)
}
input.onButtonPressed(Button.B, function () {
    Run = 0
    Stop()
})
function FW () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P4, 80)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 280)
}
function SR () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P4, 0)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 0)
}
function Stop () {
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
