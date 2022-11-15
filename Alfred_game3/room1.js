class room1 extends Phaser.Scene {

    constructor() {
        super({ key: 'room1' });
        
        // Put global variable here
    }

    init(data) {
        this.playerPos = data.playerPos
        this.inventory = data.inventory
    }
    

    preload() {

    // Step 1, load JSON
    this.load.tilemapTiledJSON("room1","assets/maps2.json");

    // Step 2 : Preload any images here, nickname, filename
    this.load.image("mus", "assets/22_Museum_32x32.png");
    this.load.image("Bathroom", "assets/Bathroom.png");
    this.load.image("wall", "assets/wall.png");

    // //item
    // this.load.atlas('item','assets/item.png','assets/item.json');
    // //Icon
    // this.load.image("icon1", "assets/lemon.png");
    // this.load.image("icon2", "assets/roller.png");
    // this.load.image("icon3", "assets/weapon.png");

    }

    create() {
    console.log('*** room1 scene');

    // this.sound1 = this.sound.add('Is');
    // this.sound2 = this.sound.add('Bs');
    
    window.map = map;
    //Step 3 - Create the map from main
    var map = this.make.tilemap({key:'room1'});

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    var decoo = map.addTilesetImage("22_Museum_32x32","mus");
    var decoos = map.addTilesetImage("bathroom","Bathroom");
    var groundss = map.addTilesetImage("wall", "wall");

    let tilesArray = [ groundss, decoo, decoos ];

    // Step 5  Load in layers by layers
    this.ground3 = map.createLayer("tiles",tilesArray, 0, 0);
    this.walls = map.createLayer("wall",tilesArray, 0, 0);
    this.dero1 = map.createLayer("border",tilesArray, 0, 0);
    
     // load fire objects
    //  var start = map.findObject("objectLayer", (obj) => obj.name === "Start");

    // set bounds so the camera won't go outside the game world
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

     // set the boundaries of our game world
     this.physics.world.bounds.width = this.ground3.width;
     this.physics.world.bounds.height = this.ground3.height;
 
     // Add main player here with physics.add.sprite
     // create the this.playersprite
    //  this.player = this.physics.add.sprite(start.x, start.y, "dashu");

     this.player = this.physics.add.sprite(
      this.playerPos.x,
      this.playerPos.y,
      this.playerPos.dir
    );

     //icon on left up
    //  this.icon1 = this.physics.add.sprite 
    //  (50,50,"icon1")
    //  .setScrollFactor(0)
    //  .setVisible(false);
 
    //  this.icon2 = this.physics.add.sprite 
    //  (100,50,"icon2")
    //  .setScrollFactor(0)
    //  .setVisible(false);
 
    //  this.icon3 = this.physics.add.sprite 
    //  (150,50,"icon3")
    //  .setScrollFactor(0)
    //  .setVisible(false);


     this.player.setCollideWorldBounds(true); // don't go out of the this.map

    // get the tileIndex number in json, +1
    // this.itemcollect2.setTileIndexCallback(1644, this.removeItem1, this);
 
 
     this.cursors = this.input.keyboard.createCursorKeys();
    
     // make the camera follow the player
     this.cameras.main.startFollow(this.player);
 
     //enable debug
     window.player = this.player;

    // set collide
    this.player.setCollideWorldBounds(true);
    // the this.player will collide with this layer
    this.walls.setCollisionByProperty({ ddd: true,llas: true });
    this.dero1.setCollisionByProperty({ ddd: true,llas: true });

    // this.playerwill collide with the level tiles
    this.physics.add.collider(this.walls, this.player);
    this.physics.add.collider(this.dero1, this.player);
    
    // What will collider witg what layers
    // this.physics.add.collider(this.itemcollect2, this.player);

    // if (window.icon === 3) {
    //   this.icon1.setVisible(true);
    //   this.icon2.setVisible(true);
    //   this.icon3.setVisible(true);
    //   } else if (window.icon === 2) {
    //   this.icon1.setVisible(true);
    //   this.icon3.setVisible(true);
    //   } else if (window.icon === 1) {
    //   this.icon1.setVisible(true);
    //   } 


    }


    update() {

    //Exit for room 1
    if (
      this.player.x > 478.50 &&
      this.player.x < 542 &&
      this.player.y > 611.51 )
      {
      this.world();
    }

    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
      this.player.anims.play("left", true); // walk left
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
      this.player.anims.play("right", true);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-200);
      this.player.anims.play("up", true);
      //console.log('up');
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(200);
      this.player.anims.play("down", true);
      //console.log('down');
    } else {
      this.player.anims.stop();
      this.player.body.setVelocity(0, 0);
    }

    }

// Function to jump to room1
  world(player, tile) {
  console.log("world function");
  let playerPos = {};
  playerPos.x = 382.49;
  playerPos.y = 1229.32;
  playerPos.dir = "dashu";
  this.scene.start("world", { playerPos: playerPos });
}

// removeItem1(player, tile) {
//   this.sound1.play();

//   // this.itemcollect++;
//   console.log("remove item1", tile.index);
//   this.itemcollect2.removeTileAt(tile.x, tile.y);
//   this.icon1.setVisible(true); 
//   window.icon++;
//   return false;
// }
// removeItem2(player, tile) {
//   this.sound1.play();

//   // this.itemcollect++;
//   console.log("remove item2", tile.index);
//   this.itemcollect2.removeTileAt(tile.x, tile.y);
//   this.icon2.setVisible(true); 
//   window.icon++;
//   return false;
// }
// removeItem3(player, tile) {
//   this.sound1.play();

//   // this.itemcollect++;
//   console.log("remove item3", tile.index);
//   this.itemcollect2.removeTileAt(tile.x, tile.y);
//   this.icon3.setVisible(true); 
//   window.icon++;
//   return false;
// }

} //////////// end of class world ////////////////////////


