class Road extends Phaser.GameObjects.Container{
    constructor(config){
        super(config.scene);
        this.scene = config.scene;
        this.back = this.scene.add.image(0,0,"road");
        this.add(this.back);
        this.scene.add.existing(this);

        // this.back.displayWidth = game.config.width * .5;
        // this.back.scaleY = this.back.scaleX;
        Align.scaleTodGameW(this.back, .5);
        this.setSize(this.back.displayWidth, game.config.height);
        console.log(this);

        this.lineGroup = this.scene.add.group();
        this.count = 0;
    }
    makeLines(){
        this.vSpace = this.displayHeight/10;
        for( var i=0; i<20; i++){
            var line = this.scene.add.image(this.x, this.vSpace*i, "line");
            line.oy = line.y; //원래 위치 기록 (오리지널 y)
            this.lineGroup.add(line);
        }
    }
    moveLines(){
        this.lineGroup.children.iterate(function(child){
            child.y+=this.vSpace/20;  //속도조절
        }.bind(this)); //this가 scene을 가리키도록 함
        this.count++;
        if(this.count == 20){
            this.count = 0;
            this.lineGroup.children.iterate(function(child){
                child.y = child.oy;
            }.bind(this));
        }
    }
}