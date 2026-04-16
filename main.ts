/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: Apr 2026
 * This program moves a sprite clockwise or counter clockwise
*/

//clean up 
basic.showIcon(IconNames.Happy)

// Button "A" variable assign.
let loopCounter1 = 0
let loopCounter2 = 0
let loopCounter3 = 0
let loopCounter4 = 0

//set up
    input.onButtonPressed(Button.A, function() {
        basic.clearScreen()
        const sprite = game.createSprite(0, 0)

    //Move sprite clockwise.
        while (loopCounter1 <= 5) {
        basic.pause(500)
        sprite.move(1)   
        loopCounter1 = loopCounter1 + 1
    }
    sprite.turn(Direction.Right, 90)
    while (loopCounter2 <= 5) {
        basic.pause(500)
        sprite.move(1)
        loopCounter2 = loopCounter2 + 1
    }
    sprite.turn(Direction.Right, 90)
    while (loopCounter3 <= 5) {
        basic.pause(500)
        sprite.move(1)
        loopCounter3 = loopCounter3 + 1
    }
    sprite.turn(Direction.Right, 90)
    while (loopCounter4 <= 5) {
        basic.pause(500)
        sprite.move(1)
        loopCounter4 = loopCounter4 + 1
    }
    sprite.delete()
    })

// Button "B" variable assign.
let loopCounter5 = 0
let loopCounter6 = 0
let loopCounter7 = 0
let loopCounter8 = 0

//set up
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    const sprite1 = game.createSprite(0, 0)

    //Move sprite counter-clockwise.
    sprite1.turn(Direction.Left, 90)
    while (loopCounter5 <= 5) {
        basic.pause(500)
        sprite1.move(-1)
        loopCounter5 = loopCounter5 + 1
    }
    sprite1.turn(Direction.Left, 90)
    while (loopCounter6 <= 5) {
        basic.pause(500)
        sprite1.move(-1)
        loopCounter6 = loopCounter6 + 1
    }
    sprite1.turn(Direction.Left, 90)
    while (loopCounter7 <= 5) {
        basic.pause(500)
        sprite1.move(-1)
        loopCounter7 = loopCounter7 + 1
    }
    sprite1.turn(Direction.Left, 90)
        while (loopCounter8 <= 5) {
        basic.pause(500)
        sprite1.move(-1)
        loopCounter8 = loopCounter8 + 1
    }
    sprite1.delete()
})
