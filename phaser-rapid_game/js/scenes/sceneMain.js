class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload(){
       this.load.image("road", "/phaser-rapid_game/images/road.jpg");
       this.load.image("cars", "/phaser-rapid_game/images/cars.png",{frameWidth:60, frameHeight:126});
       this.load.image("line", "/phaser-rapid_game/images/line.png");
       this.load.image("pcar1", "/phaser-rapid_game/images/pcar1.png");
       this.load.image("pcar2", "/phaser-rapid_game/images/pcar2.png");
       this.load.image("cone", "/phaser-rapid_game/images/cone.png");
       this.load.image("barrier", "/phaser-rapid_game/images/barrier.png");

       this.load.image("button1","/phaser-rapid_game/images/ui/buttons/2/1.png");
       this.load.image("button2","/phaser-rapid_game/images/ui/buttons/2/5.png");

       this.load.audio("cat",["/phaser-rapid_game/audio/meow.mp3","/phaser-rapid_game/audio/meow.ogg"]);
       this.load.audio("backgroundMusic",["/phaser-rapid_game/audio/background.mp3","/phaser-rapid_game/audio/background.ogg"]);
       this.load.audio("boom",["/phaser-rapid_game/audio/boom.mp3","/phaser-rapid_game/audio/boom.ogg"]);
       this.load.audio("whoosh",["/phaser-rapid_game/audio/whoosh.mp3","/phaser-rapid_game/audio/whoosh.ogg"]);


       this.load.image("toggleBack", "/phaser-rapid_game/images/ui/toggles/4.png");
       this.load.image("sfxOff", "/phaser-rapid_game/images/ui/icons/sfx_off.png");
       this.load.image("sfxOn", "/phaser-rapid_game/images/ui/icons/sfx_on.png");
       this.load.image("musicOn", "/phaser-rapid_game/images/ui/icons/music_on.png");
       this.load.image("musicOff", "/phaser-rapid_game/images/ui/icons/music_off.png");


    }
    create(){
        const mediaManager = new MediaManager({scene:this});
        mediaManager.setBackgroundMusic('backgroundMusic');

        this.sb = new ScoreBox({scene:this});
        this.sb.x = game.config.width-60;
        this.sb.y = 50;
        model.score = 0;

        //도로
        this.road = new Road({scene:this});
        this.road.x = game.config.width/2;
        this.road.makeLines();

        this.alignGrid = new AlignGrid({scene:this,rows:5,cols:5});
        this.alignGrid.showNumbers();
        this.alignGrid.placeAtIndex(4,this.sb);

        //버튼 텍스트 스타일
        const fireText = {color:'black', fontSize:20};
        const soundButton = new SoundButtons({scene:this});
    }
    update(){
      this.road.moveLines();
      this.road.moveObject();
    }
}