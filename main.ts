datalogger.onLogFull(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
})
radio.onReceivedValue(function (name, value) {
    id = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    serial.writeValue("" + id + ":" + name, value)
    datalogger.log(datalogger.createCV(name, value))
})
let id = 0
radio.setGroup(77)
datalogger.setColumnTitles(
"temp",
"lum",
"h2o"
)
