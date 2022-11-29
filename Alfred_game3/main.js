class main extends Phaser.Scene {
  constructor() {
    super({
      key: "main",
    });

    // Put global variable here
  }
  preload() {
    
    // Step 1, load JSON
   this.load.tilemapTiledJSON("world","assets/maps.json");


   // Step 2 : Preload any images here, nickname, filename
   this.load.image("farm1", "assets/farm1.png");
   this.load.image("Floor1", "assets/floor1.png");
   this.load.image("Inte1", "assets/Inte1.png");
   this.load.image("Roo1", "assets/Roo1.png");
   this.load.image("gatherfll", "assets/gather_floors_1.5.jpeg");
   this.load.image("intro", "assets/21.jpeg");
   this.load.image("intro2", "assets/22.jpeg");
   
   this.load.image("3e", "assets/4_Bedroom_32x32.png");
   this.load.image("4e", "assets/5_Classroom_and_library_32x32.png");
   this.load.image("5e", "assets/allwall.png");
   this.load.image("6e", "assets/gather_floors_1.5.png");
   this.load.image("7e", "assets/wood.png");



   //Character
   this.load.atlas('dashu','assets/character.png','assets/character.json');
   this.load.atlas('monster','assets/monster.png','assets/monster.json');
   this.load.atlas('bibi','assets/npc.png','assets/npc.json');
   this.load.atlas('bubu','assets/bomb.png','assets/bomb.json');

   //item
   // this.load.atlas('item','assets/item.png','assets/item.json');

    //Icon
    // this.load.image("icon1", "assets/lemon.png");
    // this.load.image("icon2", "assets/roller.png");
    // this.load.image("icon3", "assets/weapon.png");

       
   //audio
   this.load.audio("bg","assets/funday.mp3");
  

 
  }

  create() {
    console.log("*** main scene");
    // this.add.image(0, 0, 'cover').setOrigin(0, 0).setScale(1);


    // this.sound1 = this.sound.add('Is');


    this.music = this.sound.add("bg",{loop:true,}).setVolume(0.1);
    this.music.play();
    

    this.anims.create({
      key: "up",
      frames:[
        {key:'dashu', frame: 'back left.png'},
        {key:'dashu', frame: 'back.png'},
        {key:'dashu', frame: 'back right.png'}, 
    ],
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames:[
        {key:'dashu', frame:'left side left.png'},
        {key:'dashu', frame:'left side.png'},
        {key:'dashu', frame:'left side right.png'},
    ],
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "down",
      frames:[
        {key:'dashu', frame: 'front right.png'},
        {key:'dashu', frame: 'front.png'},
        {key:'dashu', frame: 'front left.png'}, 
    ],
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames:[
        {key:'dashu', frame: 'right side left.png'},
        {key:'dashu', frame: 'right side.png'},
        {key:'dashu', frame: 'right side right.png'}, 
    ],
      frameRate: 10,
      repeat: -1,
    });

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



    // Add any sound and music here
    // ( 0 = mute to 1 is loudest )
    //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

    //this.music.play()
    // window.music = this.music

    // Add image and detect spacebar keypress
    //this.add.image(0, 0, 'main').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");
    var key1 = this.input.keyboard.addKey(49);


    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to intro scene");
        let playerPos = {};
        playerPos.x = 772;
        playerPos.y = 1240;
        playerPos.dir = "dashu";
        this.scene.start("intro", { playerPos: playerPos });
      },
      this
    );

    key1.on("down", function () {
        console.log("Jump to world scene");
        let playerPos = {};
        playerPos.x = 772;
        playerPos.y = 1240;
        playerPos.dir = "dashu";
        this.scene.start("world", { playerPos: playerPos });
      },
      this
    );



    // Add any text in the main page
    this.add.text(90, 150, "Press spacebar to continue", {
      font: "30px Courier",
      fill: "#FFFFFF",
    });

    // Create all the game animations here
  }
}
