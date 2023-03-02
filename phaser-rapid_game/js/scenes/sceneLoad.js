class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }
    preload(){
        this.progText = this.add.text(game.config.width/2, game.config.height/2,"0%",{color:'#fff', fontSize:game.config.width/20});
        this.progText.setOrigin(0.5,0.5); //화면 정중앙 배치
        this.load.on('progress', this.onProgress, this);

        this.load.image("road", "/phaser-rapid_game/images/road.jpg");
        this.load.image("cars", "/phaser-rapid_game/images/cars.png",{frameWidth:60, frameHeight:126});
        this.load.image("line", "/phaser-rapid_game/images/line.png");
        this.load.image("pcar1", "/phaser-rapid_game/images/pcar1.png");
        this.load.image("pcar2", "/phaser-rapid_game/images/pcar2.png");
        this.load.image("cone", "/phaser-rapid_game/images/cone.png");
        this.load.image("barrier", "/phaser-rapid_game/images/barrier.png");
 
        this.load.image("button1","/phaser-rapid_game/images/ui/buttons/2/4.png");
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
    onProgress(value){
        console.log(value);
        let per = Math.floor(value*100);
        this.progText.setText("로딩 중 : "+per+"%");
    }
    create(){
        this.scene.start("SceneTitle");
    }
}