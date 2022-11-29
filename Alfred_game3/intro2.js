class intro2 extends Phaser.Scene {
  constructor() {
    super({
      key: "intro2",
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
   this.load.image("intro", "assets/21.jpeg");
   this.load.image("intro2", "assets/22.jpeg");



   //Character
   this.load.atlas('dashu','assets/character.png','assets/character.json');
   this.load.atlas('monster','assets/monster.png','assets/monster.json');
   this.load.atlas('bibi','assets/npc.png','assets/npc.json');
   this.load.atlas('bubu','assets/bomb.png','assets/bomb.json');

   //item
   // this.load.atlas('item','assets/item.png','assets/item.json');
  }

  create() {
    console.log("*** intro2 scene");
    this.add.image(0, 0, 'intro2').setOrigin(0, 0).setScale(0.6);
  

    // Add any sound and music here
    // ( 0 = mute to 1 is loudest )
    //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

    //this.music.play()
    //window.music = this.music

    // Add image and detect spacebar keypress
    //this.add.image(0, 0, 'main').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to intro3 scene");
        let playerPos = {};
        playerPos.x = 772;
        playerPos.y = 1240;
        playerPos.dir = "dashu";
        this.scene.start("intro3", { playerPos: playerPos });
      },
      this
    );




    // Create all the game animations here
  }
}
