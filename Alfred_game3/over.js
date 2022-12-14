class over extends Phaser.Scene {
  constructor() {
    super({
      key: "over",
    });

    // Put global variable here
  }
  preload() {
    
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world","assets/maps.json");


    // Step 2 : Preload any images here, nickname, filename
    this.load.image("house", "assets/hosue.png");
    this.load.image("roots", "assets/root.png");
    this.load.image("deco", "assets/deco1.png");
    this.load.image("plant1", "assets/mushroom.png");
    this.load.image("ground", "assets/tile.png");
    this.load.image("deco2", "assets/pipo.png");
    this.load.image("plant2", "assets/tree.png");
    this.load.image("cover", "assets/cover.png");
    this.load.image("intro", "assets/intro.png");
    this.load.image("intro2", "assets/intro2.png");
    this.load.image("intro3", "assets/intro3.png");
    this.load.image("end", "assets/lose.png");

    //Character
    this.load.atlas('dashu','assets/maincharacter.png','assets/maincharacter.json');
    this.load.atlas('monster','assets/monster.png','assets/monster.json');
    this.load.atlas('bibi','assets/npc.png','assets/npc.json');
    this.load.atlas('bubu','assets/bomb.png','assets/bomb.json');

    //item
    this.load.atlas('item','assets/item.png','assets/item.json');
  }

  create() {
    console.log("*** end scene");
    this.add.image(0, 0, 'end').setOrigin(0, 0).setScale(0.145);



    

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
        console.log("Jump to world scene");
        let playerPos = {};
        playerPos.x = 602;
        playerPos.y = 1225;
        playerPos.dir = "dashu";
        this.scene.start("world", { playerPos: playerPos });
      },
      this
    );




    // Create all the game animations here
  }
}
