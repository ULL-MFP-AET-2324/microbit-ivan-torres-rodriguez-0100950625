input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 10))
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
	
})
