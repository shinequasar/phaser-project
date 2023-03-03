class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }
    preload(){
        // this.load.setBaseURL("https://want-game.netlify.app");

        this.bar = new Bar({scene:this, x:game.config.width/3,y:game.config.height/2});
        this.progText = this.add.text(game.config.width/2, game.config.height/2,"0%",{color:'#fff', fontSize:game.config.width/18});
        this.progText.setOrigin(0.5,0.5); //화면 정중앙 배치
        this.load.on('progress', this.onProgress, this);

        this.load.image("road", "/images/road.jpg");
        this.load.image("titleBack", "/images/titleBack.jpg");
        this.load.spritesheet("cars", "/images/cars.png",{frameWidth:60, frameHeight:126});
        this.load.image("line", "/images/line.png");
        this.load.image("pcar1", "/images/pcar1.png");
        this.load.image("pcar2", "/images/pcar2.png");
        this.load.image("cone", "/images/cone.png");
        this.load.image("barrier", "/images/barrier.png");
 
        this.load.image("button1","/images/ui/buttons/2/4.png");
        this.load.image("button2","/images/ui/buttons/2/5.png");
 
        this.load.audio("cat",["/audio/meow.mp3","/phaser-rapid_game/audio/meow.ogg"]);
        this.load.audio("backgroundMusic",["/audio/background.mp3","/audio/background.ogg"]);
        this.load.audio("boom",["/audio/boom.mp3","/audio/boom.ogg"]);
        this.load.audio("whoosh",["/audio/whoosh.mp3","/audio/whoosh.ogg"]);
 
        this.load.image("toggleBack", "/images/ui/toggles/4.png");
        this.load.image("sfxOff", "/images/ui/icons/sfx_off.png");
        this.load.image("sfxOn", "/images/ui/icons/sfx_on.png");
        this.load.image("musicOn", "/images/ui/icons/music_on.png");
        this.load.image("musicOff", "/images/ui/icons/music_off.png");

        // this.load.bitmapFont("pixelFont", "/phaser-rapid_game/font/font.xml");   
    }
    onProgress(value){
        console.log(value);
        this.bar.setPercent(value);
        let per = Math.floor(value*100);
        this.progText.setText("로딩 중 : "+per+"%");
    }
    create(){
        this.scene.start("SceneTitle");
    }
}