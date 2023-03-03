class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload(){
     
    }
    create(){
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        model.gameOver = false;
        model.speed=1;
        model.score=0;

        //도로
        this.road = new Road({scene:this});
        this.road.x = game.config.width*.25;
        this.road.makeLines();
        this.road.car.setFrame(0);

        this.road2 = new Road({scene:this});
        this.road2.x = game.config.width*.75;
        this.road2.makeLines();
        this.road2.car.setFrame(1);

        this.alignGrid = new AlignGrid({scene:this,rows:5,cols:5});
        // this.alignGrid.showNumbers();
        // this.alignGrid.placeAtIndex(4,this.sb);

        //버튼 텍스트 스타일
        const fireText = {color:'black', fontSize:20};
        const soundButton = new SoundButtons({scene:this});

        this.sb = new ScoreBox({scene:this});
        this.sb.x = game.config.width/2;
        this.sb.y = 50;
        emitter.on(G.SCORE_UPDATED, this.scoreUpdated, this);
    }
    scoreUpdated(){ 
      if(model.score/5 == Math.floor(model.score/5)){
        model.speed+=0.25;
        if(model.speed>1.3)//장애물 속도 상한선
            model.speed=1.3;
      }
    }
    update(){
      //좌
      this.road.moveLines();
      this.road.moveObject();

      //우
      this.road2.moveLines();
      this.road2.moveObject();
    }
}