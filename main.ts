radio.onReceivedNumber(function (receivedNumber) {
    if (じゃんけん == 1 && receivedNumber == 2 && receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (じゃんけん == 2 && receivedNumber == 1 && receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (じゃんけん == 3 && receivedNumber == 2 && receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (じゃんけん == 1 && receivedNumber == 1 && receivedNumber == 2) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # # .
        # # # # #
        # # # # #
        . . . . .
        `)
    radio.sendNumber(1)
    じゃんけん = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # .
        # # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    radio.sendNumber(3)
    じゃんけん = 3
})
radio.onReceivedString(function (receivedString) {
    if (じゃんけん == receivedString) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (じゃんけん == 1 && receivedString == 2) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (じゃんけん == 2 && receivedString == 3) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (じゃんけん == 3 && receivedString == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        # # # # .
        # # # # .
        . # # # .
        `)
    radio.sendNumber(2)
    じゃんけん = 2
})
let じゃんけん = ""
radio.setGroup(10)
