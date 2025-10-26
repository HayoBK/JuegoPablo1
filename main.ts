scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel0`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        f f f f f f f f f f f f f f f f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . f . . . . . f 
        f . f f f f f f f f f . . . . f 
        f . . . . . . . . f . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f f f f f f f f f f f f f f f f 
        `, Pablini, 70, 0)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        f f f f f f f f f f f f f f f f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . f . . . . . . . . . . . f 
        f . f f f f f f f . . . . . . f 
        f . . f . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f . . . . . . . . . . . . . . f 
        f f f f f f f f f f f f f f f f 
        `, Pablini, -70, 0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel3`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel1`)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Pablini.setPosition(20, 20)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    sprites.destroy(projectile)
    info.changeScoreBy(1)
})
let Tomi: Sprite = null
let Laporte: Sprite = null
let Betanzo: Sprite = null
let Cleme: Sprite = null
let projectile: Sprite = null
let Pablini: Sprite = null
Pablini = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . 2 2 2 f 2 f 2 2 2 . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Pablini.setPosition(20, 20)
scene.setBackgroundColor(5)
tiles.setCurrentTilemap(tilemap`nivel2`)
scene.cameraFollowSprite(Pablini)
controller.moveSprite(Pablini)
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(5000, function () {
    Cleme = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . d d d e e e e e e d . . . 
        . . . d d f d e e e e e d . . . 
        . . . d d d d d d d d d d . . . 
        . . . d d d 2 2 2 2 2 d d . . . 
        . . . d d d d d d d d d d . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . d 2 2 2 2 2 2 d . . . . 
        . . . . d . . f f . . d . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . f 9 . . 9 f . . . . . 
        `, SpriteKind.Enemy)
    Cleme.setVelocity(randint(-20, 20), randint(-20, 20))
})
game.onUpdateInterval(2000, function () {
    Betanzo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . d . . 
        . . . f 8 8 8 7 7 7 f . d . d . 
        . . 5 5 8 e 8 7 e 7 5 5 . d . . 
        . . 5 2 8 8 8 7 7 7 2 5 . d . . 
        . . . 2 2 2 2 2 2 2 2 2 2 d . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . . f . . f . . . . . . . 
        . . . . . f . . f . . . . . . . 
        . . . . . 9 . . 9 . . . . . . . 
        . . . . f . . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Betanzo.setVelocity(randint(-20, 20), randint(-20, 20))
})
forever(function () {
    Betanzo.setBounceOnWall(true)
})
forever(function () {
    Laporte.setBounceOnWall(true)
})
forever(function () {
    Tomi.setBounceOnWall(true)
})
forever(function () {
    Cleme.setBounceOnWall(true)
})
forever(function () {
    Pablini.setBounceOnWall(true)
})
game.onUpdateInterval(1001, function () {
    Laporte = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d e d e d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f . f . . . . . . . 
        `, SpriteKind.Enemy)
    Laporte.setVelocity(randint(-20, 20), randint(-20, 20))
})
game.onUpdateInterval(3000, function () {
    Tomi = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . e . e . e . e . . . . 
        . . . . e e e . e . e . e . . . 
        . . . . e . e e e e . e e . . . 
        . . . . e e e e e . e e e . . . 
        . . . . e e e e e e e e e . . . 
        . . . . d 8 8 8 d 8 8 8 d . . . 
        . . . 8 8 8 e 8 d 8 e 8 8 8 . . 
        . . . 8 d 8 8 8 d 8 8 8 d 8 . . 
        . . . . d d d 2 2 2 d d d . . . 
        . . . 2 2 2 d d d d d d 2 2 2 . 
        . . . 2 . . f . . . f . . . 2 . 
        . . . d . . f . . . f . . . d . 
        . . . . . . f . . . f . . . . . 
        . . . . . . 8 . . . 8 . . . . . 
        . . . . . f . . . . . f . . . . 
        `, SpriteKind.Enemy)
    Tomi.setVelocity(randint(-20, 20), randint(-20, 20))
})
