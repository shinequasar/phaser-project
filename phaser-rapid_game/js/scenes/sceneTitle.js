class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTiTle');
    }
    preload()
    {
    	this.load.image("title","/phaser-rapid_game/images/title.png")
        this.load.image("button1","/phaser-rapid_game/images/ui/buttons/2/4.png");
        this.load.image("button2","/phaser-rapid_game/images/ui/buttons/2/5.png");
    }
    create() {
        //준비-모델과 컨트롤러는 맨 첫 씬에 있어야 함
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        model.score = 0;

        this.alignGrid = new AlignGrid({rows:11, cols:11,scene:this});
        // this.alignGrid.showNumbers();
        
        const title = this.add.image(0,0,'title');
        Align.scaleToGameW(title, .9);
        this.alignGrid.placeAtIndex(38,title);

        const fireText = {color:'black'};
        const btnStart = new FlatButton({scene:this, key:'button1', text:'시작하기', textConfig:fireText, event:'start_game'})
        this.alignGrid.placeAtIndex(60, btnStart);
        
        emitter.on('start_game', this.startGame, this);
    }
    startGame(){
        this.scene.start('SceneMain');
    }
    update() {}
}