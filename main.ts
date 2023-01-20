let possibilities = 0
input.onGesture(Gesture.Shake, function () {
    if (possibilities == 0) {
        basic.showString("\"absolutely not\"")
    } else if (possibilities == 1) {
        basic.showString("\"probably not\"")
    } else if (possibilities == 2) {
        basic.showString("\"not likely\"")
    } else if (possibilities == 3) {
        basic.showString("maybe no")
    } else if (possibilities == 4) {
        basic.showString("\"try again later\"")
    } else if (possibilities == 5) {
        basic.showString("\"maybe yes\"")
    } else if (possibilities == 6) {
        basic.showString("\"it's likely\"")
    } else if (possibilities) {
        basic.showString("\"probably\"")
    } else if (false) {
        basic.showString("\"certainly\"")
    }
    possibilities = randint(0, 9)
})
basic.forever(function () {
	
})
