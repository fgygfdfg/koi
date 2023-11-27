koi.koi_onbtn(function (btnA, btnB) {
    if (btnA != 0) {
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        koi.koi_reset_cls()
    }
})
koi.koi_classified(function (classId) {
    if (parseFloat(classId) == 1) {
        basic.showString("green")
        music.play(music.stringPlayable("C - - - - - - - ", 120), music.PlaybackMode.UntilDone)
        led.plot(0, 0)
        led.unplot(1, 0)
        led.unplot(2, 0)
        led.unplot(3, 0)
        led.unplot(4, 0)
    }
    if (parseFloat(classId) == 2) {
        basic.showString("pink")
        music.play(music.stringPlayable("C D - - - - - - ", 120), music.PlaybackMode.UntilDone)
        led.plot(1, 0)
        led.unplot(2, 0)
        led.unplot(3, 0)
        led.unplot(4, 0)
        led.unplot(0, 0)
    } else if (parseFloat(classId) == 3) {
        basic.showString("red")
        music.play(music.stringPlayable("C D E - - - - - ", 120), music.PlaybackMode.UntilDone)
        led.plot(2, 0)
        led.unplot(3, 0)
        led.unplot(4, 0)
        led.unplot(1, 0)
        led.unplot(0, 0)
    } else if (parseFloat(classId) == 4) {
        basic.showString("yello")
        music.play(music.stringPlayable("C D E F - - - - ", 120), music.PlaybackMode.UntilDone)
        led.plot(4, 0)
        led.unplot(1, 0)
        led.unplot(2, 0)
        led.unplot(3, 0)
        led.unplot(0, 0)
    } else if (parseFloat(classId) == 5) {
        basic.showString("orange")
        music.play(music.stringPlayable("C D E F G - - - ", 120), music.PlaybackMode.UntilDone)
        led.plot(3, 0)
        led.unplot(1, 0)
        led.unplot(2, 0)
        led.unplot(0, 0)
        led.unplot(4, 0)
    }
})
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . # # # .
    # . # . #
    . # # # .
    . . . . .
    `)
basic.pause(6000)
koi.koi_init(SerialPin.P1, SerialPin.P12)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
koi.koi_reset_cls()
koi.koi_lcd_direction(koi.LcdDirection.Front)
koi.koi_cls_load("class.json")
basic.forever(function () {
    koi.koi_run()
    basic.pause(100)
})
