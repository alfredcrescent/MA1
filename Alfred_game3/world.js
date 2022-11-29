class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });
  }


  // incoming data from scene below
  init(data) {
    this.playerPos = data.playerPos
    this.inventory = data.inventory
}

  preload() {

    

    // Step 1, load JSON
   this.load.tilemapTiledJSON("world","assets/maps.json");


   // Step 2 : Preload any images here, nickname, filename
   this.load.image("farm1", "assets/farm1.png");
   this.load.image("Floor1", "assets/floor1.png");
   this.load.image("Inte1", "assets/Inte1.png");
   this.load.image("Roo1", "assets/Roo1.png");
   this.load.image("intro", "assets/21.jpeg");
   this.load.image("intro2", "assets/22.jpeg");
  
  this.load.image("6e", "assets/gather_floors_1.5.png");


   //Character
   this.load.atlas('dashu','assets/maincharacter.png','assets/maincharacter.json');
   this.load.atlas('monster','assets/monster.png','assets/monster.json');
   this.load.atlas('bibi','assets/npc.png','assets/npc.json');
   this.load.atlas('bubu','assets/bomb.png','assets/bomb.json');
   this.load.atlas('item','assets/item.png','assets/item.json');


   //item
   // this.load.atlas('item','assets/item.png','assets/item.json');

   //audio
   this.load.audio("bg","assets/funday.mp3");
   this.load.audio("gg","assets/gg.wav");


  }

  create() {

    
    console.log("*** world scene");
    this.sound3 = this.sound.add("gg").setVolume(0.1);

    

    //Step 3 - Create the map from main
    var map = this.make.tilemap({key:'world'});

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    var groundss = map.addTilesetImage("Roo1", "Roo1");
    var deco2 = map.addTilesetImage("Inte1","Inte1");
    var decoration = map.addTilesetImage("farm1","farm1");
    var dij = map.addTilesetImage("gather_floors_1.5","6e");
    var coin = map.addTilesetImage("item","item");



    let tilesArray = [ groundss,deco2, decoration, dij, coin ];


    // Step 5  Load in layers by layers
    this.ground = map.createLayer("ground",tilesArray, 0, 0);
    this.decoo = map.createLayer("deco2", tilesArray,0,0);
    this.decooo = map.createLayer("decoration",tilesArray,0,0);
    this.dec13 = map.createLayer("Tile Layer 4",tilesArray,0,0);
    this.collectItem = map.createLayer("collectitem",tilesArray,0,0);






    this.anims.create({
      key:'hihi',
      frames:[
          {key:'bubu', frame:'bomb1.png'},
          {key:'bubu', frame:'bomb2.png'},
          {key:'bubu', frame:'bomb3.png'},
          {key:'bubu', frame:'bomb4.png'},
          {key:'bubu', frame:'bomb5.png'},

      ],
      frameRate:10,
      repeat:-1,
  })

  this.anims.create({
    key:'lala',
    frames:[
        {key:'monster', frame:'left1.png'},
        {key:'monster', frame:'left2.png'},
        {key:'monster', frame:'middle.png'},
        {key:'monster', frame:'right1.png'},
        {key:'monster', frame:'right2.png'},

    ],
    frameRate:10,
    repeat:-1,
  })

  this.anims.create({
    key:'dudu',
    frames:[
        // {key:'bibi', frame:'back.png'},
        // {key:'bibi', frame:'front.png'},
        {key:'bibi', frame:'left1.png'},
        {key:'bibi', frame:'left2.png'},
        {key:'bibi', frame:'left3.png'},
        // {key:'bibi', frame:'right1.png'},
        // {key:'bibi', frame:'right2.png'},
        // {key:'bibi', frame:'right3.png'},
    ],
    frameRate:10,
    repeat:-1,
})

this.anims.create({
  key:'dede',
  frames:[
      // {key:'bibi', frame:'back.png'},
      // {key:'bibi', frame:'front.png'},
      // {key:'bibi', frame:'left1.png'},
      // {key:'bibi', frame:'left2.png'},
      // {key:'bibi', frame:'left3.png'},
      {key:'bibi', frame:'right1.png'},
      {key:'bibi', frame:'right2.png'},
      {key:'bibi', frame:'right3.png'},
  ],
  frameRate:10,
  repeat:-1,
})

    
    

    //npc movement
    this.simi1 = this.physics.add.sprite(322, 1196,"simi1").play("lala");
    this.simi2 = this.physics.add.sprite(646, 880,"simi1").play("lala");
    this.simi3 = this.physics.add.sprite(509, 430,"simi1").play("lala");
    // this.fire3 = this.physics.add.sprite(112, 305.33,"fire").play("hihi");

    // set the boundaries of our game world
    this.physics.world.bounds.width = this.ground.width;
    this.physics.world.bounds.height = this.ground.height;

    // Add main player here with physics.add.sprite
    // create the this.playersprite
    // this.player = this.physics.add.sprite(start.x, start.y, "dashu");
    this.player = this.physics.add.sprite(
      this.playerPos.x,
      this.playerPos.y,
      this.playerPos.dir);
      window.player = this.player;
    this.player.setScale(0.7).setSize(32, 32);
    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    //icon on left up
    // this.icon1 = this.physics.add.sprite 
    // (50,50,"icon1")
    // .setScrollFactor(0)
    // .setVisible(false);

    // this.icon2 = this.physics.add.sprite 
    // (100,50,"icon2")
    // .setScrollFactor(0)
    // .setVisible(false);

    // this.icon3 = this.physics.add.sprite 
    // (150,50,"icon3")
    // .setScrollFactor(0)
    // .setVisible(false);

    // // get the tileIndex number in json, +1
    
    this.collectItem.setTileIndexCallback(0, this.removeItem, this.player);
    

    // //npc border
    // this.physics.add.collider(this.player,this.simi1);
    // this.physics.add.collider(this.street2, this.simi1);
    // this.physics.add.collider(this.building2, this.simi1);

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


  this.time.addEvent({
    delay: 1000,
    callback: this.moveLeftRight3,
    callbackScope: this,
    loop: false,
  });

    //npc overlape
    this.physics.add.overlap(this.player, this.simi1,this.enemyOverlap, null, this);
    this.physics.add.overlap(this.player, this.simi2,this.enemyOverlap, null, this);
    this.physics.add.overlap(this.player, this.simi3,this.enemyOverlap, null, this);



    //keyboard
    this.cursors = this.input.keyboard.createCursorKeys();
    // make the camera follow the player
    this.cameras.main.startFollow(this.player);
    //enable debug
    this.player.setCollideWorldBounds(true);
    // the this.player will collide with this layer
    this.decoo.setCollisionByProperty({ dog: true, fish: true,  });
    this.decooo.setCollisionByProperty({ dog: true, fish: true, });

    // this.playerwill collide with the level tiles
    this.physics.add.collider(this.decooo, this.player);
    this.physics.add.collider(this.decoo, this.player);
     // set bounds so the camera won't go outside the game world
     this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

     // What will collider witg what layers
    this.physics.add.collider(this.collectItem, this.player);


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
   
  } /////////////////// end of create //////////////////////////////

  //npc function
   moveLeftRight() {
    console.log("moveLeftRight");
    this.tweens.timeline({
      targets: this.simi1,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 2000,
      tweens: [
        {
          x: 322,
        },
        {
          x: 432,
        },
      ],
    });
  }

  moveLeftRight2() {
    console.log("moveLeftRight2");
    this.tweens.timeline({
      targets: this.simi2,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 2000,
      tweens: [
        {
          x: 646,
        },
        {
          x: 608,
        },
      ],
    });
  }

  moveLeftRight3() {
    console.log("moveLeftRight3");
    this.tweens.timeline({
      targets: this.simi3,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 2000,
      tweens: [
        {
          x: 509,
        },
        {
          x: 734,
        },
      ],
    });
  }


  update(time, delta) {

    if ( this.player.x > 721
      && this. player.x< 874
      && this. player.y< 71.67 && window.icon >=3){
      
      this.winLiao();
      } 



    //check for room 1
    if (
      this.player.x > 321.10 &&
      this.player.x < 440.73 &&
      this.player.y > 1208.85 &&
      this.player.y < 1212
    ) {
      this.room1();
    }
    if (
      this.player.x > 639.06 &&
      this.player.x < 831.09 &&
      this.player.y > 864.14 &&
      this.player.y < 894.05
    ) {
      this.room2();
    }
    if (
      this.player.x > 509 &&
      this.player.x < 634 &&
      this.player.y > 379 &&
      this.player.y < 410
    ) {
      this.room3();
    }
    

    // this.fireGroup.children.iterate((fire) => {
    //   this.physics.moveToObject(fire, this.player, 30, 3000);
    // });

    // this.fireGroup2.children.iterate((fire) => {
    //   this.physics.moveToObject(fire, this.player, 30, 3000);
    // });

    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
      this.player.anims.play("left", true); // walk left
      this.player.flipX = false; // flip the sprite to the left
      //console.log('left');
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
      this.player.anims.play("left", true);
      this.player.flipX = true; // use the original sprite looking to the right
      //console.log('right');
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
      //console.log('idle');
    }
    
  } // end of update()

  // Function to jump to room1
  room1(player, tile) {
    console.log("room1 function");
    let playerPos = {};
    playerPos.x = 509.99;
    playerPos.y = 575.31;
    playerPos.dir = "up";
    this.scene.start("room1",{ playerPos: playerPos });
  }
  room2(player, tile) {
    console.log("room2 function");
    let playerPos = {};
    playerPos.x = 538;
    playerPos.y = 496;
    playerPos.dir = "up";
    this.scene.start("room2",{ playerPos: playerPos});
  }

  room3(player, tile) {
    console.log("room2 function");
    let playerPos = {};
    playerPos.x = 538;
    playerPos.y = 496;
    playerPos.dir = "up";
    this.scene.start("room3",{ playerPos: playerPos});
  }

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
  removeItem(player, tile) {
    // this.sound1.play();

    // this.itemcollect++;
    console.log("remove item", tile.index);
    this.collectItem.removeTileAt(tile.x, tile.y);
    // this.icon3.setVisible(true); 
    window.icon++;
    return false;
  }

  enemyOverlap(){
    this.sound3.play();

    console.log(" enemy overlap player");
    // this.cameras.main.shake(200);
    this.scene.start("over");
  }

  // winLiao(){
  //   console.log(" player win");
  //   this.scene.start("win");
  // }

} //////////// end of class world ////////////////////////




