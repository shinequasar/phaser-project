class Road extends Phaser.GameObjects.Container{
    constructor(config){
        super(config.scene);
        this.scene = config.scene;
        this.back = this.scene.add.image(0,0,"road");
        this.add(this.back);
        this.scene.add.existing(this); //이미 씬(scene)에 추가된 GameObject를 가져옴

        // this.back.displayWidth = game.config.width * .5;
        // this.back.scaleY = this.back.scaleX;
        Align.scaleTodGameW(this.back, .5);
        this.setSize(this.back.displayWidth, game.config.height);
        console.log(this);

        //차선 만들기
        this.lineGroup = this.scene.add.group();
        this.count = 0;
        //displayWidth 음수면 왼쪽 차선
        this.car = this.scene.add.sprite(this.displayWidth/4, game.config.height*.9,"cars"); 
        Align.scaleTodGameW(this.car, .15); //차 크기
        this.add(this.car);
        this.addObject();

        //클릭하면 일어날 것들
        //gameObject.setInteractive();는 Game Object의 터치 입력을 등록하기 위해 호출
        this.back.setInteractive();
        this.back.on('pointerdown', this.chageLanes, this); //게임 오브젝트에서 히트 영역 설정
    }
    addObject(){
        var objs=[
            {key:'pcar1', speed:10, scale:10},
            {key:'pcar2', speed:10, scale:10},
            {key:'cone', speed:20, scale:5},
            {key:'barrier', speed:20, scale:8}];
        var index = Math.floor(Math.random()*4);
        var key = objs[index].key;
        var speed = objs[index].speed;
        var scale = objs[index].scale/100;

        this.object = this.scene.add.sprite(-this.displayWidth/4,0,key);
        this.object.speed = speed;
        //50%의 확률로 추가 장애물 위치 +- 결정(좌우위치)
        let lane = Math.random()*100;
        if(lane<50) this.object.x = this.displayWidth/4; 
        Align.scaleTodGameW(this.object, scale);
        this.add(this.object);
    }
    chageLanes(){
        if(this.car.x>0) this.car.x = -this.displayWidth/4;
        else this.car.x = this.displayWidth/4;
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
    moveObject(){ //만약 객체가 게임화면 아래에 위치하게되면 객체삭제하고 새 객체 생성하기
        this.object.y += this.vSpace/this.object.speed;
        if(Collision.checkCollide(this.car, this.object)==true){
            this.car.alpha = .5;
        }else{
            this.car.alpha = 1;
        }
        if(this.object.y > game.config.height){
            this.object.destroy();
            this.addObject();
        }
    }
}