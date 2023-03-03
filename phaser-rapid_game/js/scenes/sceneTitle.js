class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload()
    {
        this.load.setBaseURL("https://want-game.netlify.app");
    	this.load.image("title","/phaser-rapid_game/images/title.png")
        this.load.image("button1","/phaser-rapid_game/images/ui/buttons/2/4.png");
        this.load.image("button2","/phaser-rapid_game/images/ui/buttons/2/5.png");
        this.load.image("want", "/phaser-rapid_game/images/want.png");
    }
    create() {
        //준비-모델과 컨트롤러는 맨 첫 씬에 있어야 함
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        model.score = 0;

        mediaManager = new MediaManager({scene:this});
        mediaManager.setBackgroundMusic('backgroundMusic');

        this.alignGrid = new AlignGrid({rows:11, cols:11,scene:this});
        // this.alignGrid.showNumbers();

        //배경 사진
        this.backImage = this.add.image(game.config.width/2, game.config.height/2,"titleBack");
        
        //타이틀배치
        const title = this.add.image(0,0,'title');
        Align.scaleToGameW(title, .7);
        this.alignGrid.placeAtIndex(27,title);

        //원트배치
        const want = this.add.sprite(0,0,"want");
        this.alignGrid.placeAtIndex(60,want);
        Align.scaleToGameW(want, .5);

        const fireText = {color:'black'};
        const btnStart = new FlatButton({scene:this, key:'button1', text:'START', textConfig:fireText, event:'start_game'})
        this.alignGrid.placeAtIndex(104, btnStart);

        emitter.on('start_game', this.startGame, this);
    }
    startGame(){
        this.scene.start('SceneMain');
    }
    update() {}
}