class room2 extends Phaser.Scene {

    constructor() {
        super({ key: 'room2' });
        
        // Put global variable here
    }

    init(data) {
        this.playerPos = data.playerPos
        this.inventory = data.inventory
    }

    preload() {


    // this.sound1 = this.sound.add('Is');
    // this.sound2 = this.sound.add('Bs');
    // this.sound3 = this.sound.add('Ds');

    // Step 1, load JSON
    this.load.tilemapTiledJSON("room2","assets/maps3.json");

    // Step 2 : Preload any images here, nickname, filename
    this.load.image("3e", "assets/4_Bedroom_32x32.png");
    this.load.image("4e", "assets/5_Classroom_and_library_32x32.png");
    this.load.image("5e", "assets/allwall.png");
    this.load.image("6e", "assets/gather_floors_1.5.png");
    this.load.image("7e", "assets/wood.png");

    // //item
    // this.load.atlas('item','assets/item.png','assets/item.json');
    // //Icon
    // this.load.image("icon1", "assets/lemon.png");
    // this.load.image("icon2", "assets/roller.png");
    // this.load.image("icon3", "assets/weapon.png");
    }

    create() {
    console.log('*** room2 scene');
    
    window.map = map;
    //Step 3 - Create the map from main
    var map = this.make.tilemap({key:'room2'});

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    var decoo = map.addTilesetImage("4_Bedroom_32x32","3e");
    var decoos = map.addTilesetImage("5_Classroom_and_library_32x32","4e");
    var groundss = map.addTilesetImage("allwall", "5e");
    var inset = map.addTilesetImage("gather_floors_1.5","6e")
    var titi = map.addTilesetImage("tile_wood","7e");

    let tilesArray = [ groundss, inset, decoo, decoos,titi ];

    // Step 5  Load in layers by layers
    this.dero11 = map.createLayer("floor2",tilesArray, 0, 0);
    this.ground5 = map.createLayer("wall4",tilesArray, 0, 0);
    this.dero22 = map.createLayer("dede",tilesArray, 0, 0);

     // load fire objects
    // var start = map.findObject("objectLayer2", (obj) => obj.name === "Start");

    // set bounds so the camera won't go outside the game world
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

     // set the boundaries of our game world
    //  this.physics.world.bounds.width = this.ground5.width;
    //  this.physics.world.bounds.height = this.ground5.height;
 
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

     this.player.setScale(1).setSize(32, 32);
    //  this.player.setCollideWorldBounds(true); // don't go out of the this.map
 
     this.cursors = this.input.keyboard.createCursorKeys();

    // get the tileIndex number in json, +1
    // this.itemcollect.setTileIndexCallback(1643, this.removeItem2, this);
 
     // make the camera follow the player
     this.cameras.main.startFollow(this.player);
 
     //enable debug
     window.player = this.player;


    //npc movement
    // this.enemy1 = this.physics.add.sprite(545.40, 161.34, "enemy1").play("dudu");
    // this.enemy2 = this.physics.add.sprite(60.60, 509.20, "enemy1").play("dede");


    this.time.addEvent({
      delay: 1000,
      callback: this.moveLeftRight,
      callbackScope: this,
      loop: false,
    });
    this.time.addEvent({
      delay: 1000,
      callback: this.moveLeftRight2,
      callbackScope: this,
      loop: false,
    });

    //npc overlape
    // this.physics.add.overlap(this.player, this.enemy1,this.enemyOverlap, null, this);
    // this.physics.add.overlap(this.player, this.enemy2,this.enemyOverlap, null, this);

     
    // set collide
    this.player.setCollideWorldBounds(true);
    // the this.player will collide with this layer
    this.ground5.setCollisionByProperty({ ee: true, ff: true, gg:true, ww:true });
    this.dero22.setCollisionByProperty({ ee: true, ff: true, gg:true, ww:true });

    // // this.playerwill collide with the level tiles
    this.physics.add.collider(this.ground5, this.player);
    this.physics.add.collider(this.dero22, this.player);

    // What will collider witg what layers
    // this.physics.add.collider(this.itemcollect, this.player);

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

    moveLeftRight() {
      console.log("moveLeftRight");
      this.tweens.timeline({
        targets: this.enemy1,
        ease: "Linear",
        loop: -1, // loop forever
        duration: 2000,
        tweens: [
          {
            x: 73.98,
          },
          {
            x: 545.40,
          },
        ],
      });
    }

    moveLeftRight2() {
      console.log("moveLeftRight2");
      this.tweens.timeline({
        targets: this.enemy2,
        ease: "Linear",
        loop: -1, // loop forever
        duration: 2000,
        tweens: [
          {
            x: 587.11,
          },
          {
            x: 60.60,
          },
        ],
      });
    }
    
    update() {

    //Exit for room 1
    if (
      this.player.x > 542.49 &&
      this.player.x < 605 &&
      this.player.y > 543.49 )
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
  playerPos.x = 705;
  playerPos.y = 953;
  playerPos.dir = "dashu";
  this.scene.start("world", { playerPos: playerPos });
}

// enemyOverlap(){
//   this.sound3.play();

//   console.log(" enemy overlap player");
//   this.scene.start("over");
// }

// removeItem1(player, tile) {
//   this.sound1.play();

//   // this.itemcollect++;
//   console.log("remove item1", tile.index);
//   this.itemcollect.removeTileAt(tile.x, tile.y);
//   this.icon1.setVisible(true); 
//   window.icon++;
//   return false;
// }
// removeItem2(player, tile) {
//   this.sound1.play();

//   // this.itemcollect++;
//   console.log("remove item2", tile.index);
//   this.itemcollect.removeTileAt(tile.x, tile.y);
//   this.icon2.setVisible(true); 
//   window.icon++;
//   return false;
// }
// removeItem3(player, tile) {
//   this.sound1.play();

//   // this.itemcollect++;
//   console.log("remove item3", tile.index);
//   this.itemcollect.removeTileAt(tile.x, tile.y);
//   this.icon3.setVisible(true); 
//   window.icon++;
//   return false;
// }

} //////////// end of class world ////////////////////////


