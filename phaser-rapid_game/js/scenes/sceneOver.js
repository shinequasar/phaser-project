class SceneOver extends Phaser.Scene {
    constructor() {
        super('SceneOver');
    }
    preload()
    {
    	this.load.image("title","/phaser-rapid_game/images/title.png")
        this.load.image("gameover", "/phaser-rapid_game/images/gameover.png");
        this.load.image("button1","/phaser-rapid_game/images/ui/buttons/2/2.png");
    }
    create() {
        this.alignGrid = new AlignGrid({rows:11, cols:11,scene:this});
        // this.alignGrid.showNumbers();
        
        const title = this.add.image(0,0,'title');
        Align.scaleToGameW(title, .9);
        this.alignGrid.placeAtIndex(38,title);

        //게임오버
        const gameover = this.add.sprite(0,0,"gameover");
        this.alignGrid.placeAtIndex(71,gameover);
        Align.scaleToGameW(gameover, .5);

        const fireText = {color:'black'};
        const btnStart = new FlatButton({scene:this, key:'button1', text:'다시하기',
        textConfig:fireText, event:'start_game'})
        this.alignGrid.placeAtIndex(104,btnStart);
        
        emitter.on('start_game', this.startGame, this);
    }
    startGame(){
        this.scene.start('SceneMain');
    }
    update() {}
}