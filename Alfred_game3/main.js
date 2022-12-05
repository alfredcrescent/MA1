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
   
   
   this.load.image("cover", "assets/cover.png");
   this.load.image("farm1", "assets/farm1.png");
   this.load.image("Floor1", "assets/floor1.png");
   this.load.image("Inte1", "assets/Inte1.png");
   this.load.image("Roo1", "assets/Roo1.png");
   this.load.image("gatherfll", "assets/gather_floors_1.5.jpeg");
   this.load.image("intro", "assets/21.jpeg");
   
   this.load.image("3e", "assets/4_Bedroom_32x32.png");
   this.load.image("4e", "assets/5_Classroom_and_library_32x32.png");
   this.load.image("5e", "assets/allwall.png");
   this.load.image("6e", "assets/gather_floors_1.5.png");
   this.load.image("7e", "assets/wood.png");

   //Character
   this.load.atlas('dashu','assets/character.png','assets/character.json');
   this.load.atlas('monster','assets/texture.png','assets/texture.json');


       
   //audio
   this.load.audio("bg","assets/funday.mp3");
  

 
  }

  create() {
    console.log("*** main scene");

    this.music = this.sound.add("bg",{loop:true,}).setVolume(1);
    this.music.play();
    this.add.image(0, 0, 'cover').setOrigin(0, 0).setScale(0.145);
    
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
    key:'lala',
    frames:[
        {key:'monster', frame:'left1.png'},
        {key:'monster', frame:'left2.png'},
        {key:'monster', frame:'front.png'},
        {key:'monster', frame:'right1.png'},
        {key:'monster', frame:'right2.png'},

    ],
    frameRate:10,
    repeat:-1,
  })


    //this.music.play()
    window.music = this.music

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");


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
  }
}
