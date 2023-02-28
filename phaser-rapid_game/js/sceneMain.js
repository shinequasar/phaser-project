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

       this.load.image("button1","/phaser-rapid_game/images/ui/buttons/2/1.png");
       this.load.image("button2","/phaser-rapid_game/images/ui/buttons/2/5.png");

    }
    create(){
        //준비
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

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

        const flatButton = new FlatButton({scene:this, key:'button1', text:"발사!", 
        x:240, y:100, event:'button_pressed', params:'fire_lasers'});
        const flatButton2 = new FlatButton({scene:this, key:'button2', text:"부수기!", 
        x:240, y:300, event:'button_pressed', params:'self_descruct'});

        emitter.on('button_pressed', this.buttonPressed, this);
        //그리드로 원트배치
        // const gridConfig = {rows:5, cols:5, scene:this};
        // const alignGrid = new AlignGrid(gridConfig);
        // alignGrid.showNumbers();

        // this.want = this.add.sprite(0,0,"want");
        // // alignGrid.placeAt(4.5,1,this.want);
        // alignGrid.placeAtIndex(9.5,this.want);
        // Align.scaleTodGameW(this.want, .2);
    }
    buttonPressed(params){
      console.log(params);
    }
    update(){
      this.road.moveLines();
      this.road.moveObject();
    }
}