radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        nuber = 0
        serial.writeLine("press a+b")
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
    } else {
        if (receivedNumber == 1) {
            serial.writeLine("press b")
            nuber = 1
            basic.clearScreen()
            basic.showIcon(IconNames.House)
            basic.pause(1000)
        } else {
            if (receivedNumber == 2) {
                basic.showString(" bell ring")
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
                basic.showString(" Hello!Come in")
                basic.showIcon(IconNames.Happy)
                basic.pause(1000)
            } else {
            	
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    serial.writeLine("press a")
    if (nuber == 1) {
        serial.writeLine("bell ringing")
        radio.sendNumber(2)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    } else {
        serial.writeLine("false")
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
    nuber = 0
    serial.writeLine("press a+b")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    serial.writeLine("press b")
    nuber = 1
    basic.clearScreen()
    basic.pause(1000)
})
let nuber = 0
radio.setGroup(1)
radio.sendNumber(1)
serial.writeLine("start reset")
// Initial display
music.setVolume(160)
nuber = 1
basic.clearScreen()
basic.forever(function () {
    // Main display based on current state
    if (nuber == 1) {
        serial.writeLine("show home")
        basic.showIcon(IconNames.House)
    } else {
        serial.writeLine("show cross")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.pause(100)
})
