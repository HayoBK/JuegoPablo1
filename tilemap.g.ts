// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel2":
            case "nivel2":return tiles.createTilemap(hex`1000100000000000000000000000000100000000000000000000000000000001000000000101010101010101010101010000000000000000000000000000000101010101000000000000000000000000000000000001000000000000000000000000000000000000010000000100000100000000000000000000000000000000000000000000000000000000000000000000010000010000010000010000000100000000000000000000000000000000000000000000000000000000000000000000020001010101010101010101010101010101000000000100000000000000000000030000000001000000000100000100000000000000010000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . 2 2 . . 2 
. . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . 
. . . . 2 . . . 2 . . 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . 
. 2 . . 2 . . 2 . . . 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . 2 . . 2 . . . 
. . . . 2 . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorDark1,myTiles.tile3,sprites.dungeon.stairNorth], TileScale.Sixteen);
            case "nivel0":
            case "nivel4":return tiles.createTilemap(hex`100010000604040404040404040404040404040501000000000000000000000000000003010009090909090909090909090900030100090a0a0a0a0a0a0a0a0a0a0900030100090a0a0a0a0a0c0a0a0a0a0900030100090a0c0a0a0a0a0a0a0a0a0900030100090a0a0a0a0a0a0c0a0a0a0900030100090a0a0a0c0a0a0a0a0a0a0900030100090a0a0a0a0a0a0a0a0a0a0900030100090a0a0a0a0a0a0c0a0a0a0900030100090a0c0a0a0b0a0a0a0a0a0900030100090a0a0a0a0a0a0a0c0a0a0900030100090a0a0a0c0a0a0a0a0a0a090003010009090909090909090909090900030100000000000000000000000000000307020202020202020202020202020208`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . 2 . . . . 2 . . 
. . 2 . 2 . . . . . . . . 2 . . 
. . 2 . . . . . . 2 . . . 2 . . 
. . 2 . . . 2 . . . . . . 2 . . 
. . 2 . . . . . . . . . . 2 . . 
. . 2 . . . . . . 2 . . . 2 . . 
. . 2 . 2 . . . . . . . . 2 . . 
. . 2 . . . . . . . 2 . . . . . 
. . 2 . . . 2 . . . . . . 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020101010101010101010101010101020201030303030303030303030303010202010303050303030303050303030102020103030303030303030303030301020201030303030503030303030303010202010303030303030303050303030102020103030303030303030303030301020201030305030303030503030303010202010303030303030303030303030102020103030503030503030303050301020201030303030303030503030303010202010303050303040303030303030102020103030303050303050303030301020201010101010101010101010101010202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . 2 . . . . . 2 . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . 2 . . . . . . . 2 . 
. 2 . . . . . . . . 2 . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . 2 . . . . 2 . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . 2 . . 2 . . . . 2 . 2 . 
. 2 . . . . . . . 2 . . . . 2 . 
. 2 . . 2 . . . . . . . . . 2 . 
. 2 . . . . 2 . . 2 . . . . 2 . 
. 2 2 2 2 2 2 2 2 2 2 . 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile5,sprites.castle.tileGrass3,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "nivel3":
            case "nivel3":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . 2 . . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . 2 2 . 2 . . . 2 . . . . 2 . 
2 . . . . . . . . . . . . . . . 
. . 2 . . 2 . . . . . . . . . . 
. . 2 . . . . 2 . . . . . . 2 . 
. . 2 2 2 2 . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.chestOpen], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "miMosaico":
            case "tile1":return tile1;
            case "miMosaico0":
            case "tile2":return tile2;
            case "miMosaico1":
            case "tile3":return tile3;
            case "miMosaico2":
            case "tile4":return tile4;
            case "miMosaico3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
