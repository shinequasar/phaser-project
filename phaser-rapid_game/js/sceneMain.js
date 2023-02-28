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
       this.load.image("want", "/phaser-rapid_game/images/want.png");
    }
    create(){
      //그리드로 원트배치
      var gridConfig = {rows:5, cols:5, scene:this};
      var alignGrid = new AlignGrid(gridConfig);
      alignGrid.showNumbers();

      this.want = this.add.sprite(0,0,"want");
      // alignGrid.placeAt(4.5,1,this.want);
      alignGrid.placeAtIndex(9.5,this.want);
      Align.scaleTodGameW(this.want, .2);

      //도로
      // this.road = new Road({scene:this});
      // this.road.x = game.config.width/2;
      // this.road.makeLines();
      
      //준비
      emitter = new Phaser.Events.EventEmitter();
      controller = new Controller();
      this.sb = new ScoreBox({scene:this});
      this.sb.x = game.config.width-60;
      this.sb.y = 50;

      model.score = 0;
    }
    update(){
      // this.road.moveLines();
      // this.road.moveObject();
    }
}