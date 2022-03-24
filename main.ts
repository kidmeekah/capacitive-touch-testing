enum RadioMessage {
    Alarm_Off = 26131,
    message1 = 49434,
    Start = 56380,
    Stop = 61268
}
radio.setGroup(22)
pins.setAudioPin(AnalogPin.P8)
let alarm = 0
let _1 = 0
let _2 = 0
let _3 = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        _1 = 1
        while (pins.digitalReadPin(DigitalPin.P0) == 1) {
            music.ringTone(370)
        }
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        _2 = 1
        while (pins.digitalReadPin(DigitalPin.P1) == 1) {
            music.ringTone(370)
        }
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        _3 = 1
        while (pins.digitalReadPin(DigitalPin.P2) == 1) {
            music.ringTone(370)
        }
    }
    if (_1 == 1 && (_2 == 1 && _3 == 1)) {
        radio.sendMessage(RadioMessage.Alarm_Off)
        _1 = 0
        _2 = 0
        _3 = 0
    }
})
