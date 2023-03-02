class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload(){
     
    }
    create(){
        const mediaManager = new MediaManager({scene:this});
        mediaManager.setBackgroundMusic('backgroundMusic');
        model.gameOver = false;

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