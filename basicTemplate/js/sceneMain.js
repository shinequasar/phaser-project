class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload(){
        //이미지나 소리를 로드하는 곳
        // this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
        // this.load.image("face","images/face.png");

        this.load.audio('cat',['sounds/meow.mp3','sounds/meow.ogg']);
    }
    create(){
        //객체들을 정의하는 것
        // this.face = this.add.image(game.config.width/2,500,"face");
        // this.face.setInteractive();
        // this.face.on('pointerdown', this.onDown,this);
        // this.face.on('pointerup', this.onUp,this);

        this.catSound = this.sound.add('cat');
        this.catSound.play();

        //동그라미 그리기
        this.graphics= this.add.graphics();
        this.graphics.lineStyle(8, 0xff0000);
        this.graphics.fillStyle(0xff00ff, .5);
        this.graphics.strokeCircle(100,200,60);
        this.graphics.fillCircle(100,200,60);

        // this.char = this.add.sprite(0, game.config.height/2, "boy");
        // var frameNames= this.anims.generateFrameNumbers('boy'); //밑에 key,frame을 생략하고 이렇게 만들어도 됨
        // this.anims.create({
        //     key: 'walk',
        //     frames: frameNames,
        //     frameRate: 16, //속도
        //     repeat: -1 //반복횟수 (-1로 두면 영원히 움직임)
        // });
        // this.char.play('walk');
        // this.doWalk();


    //     var textConfig={
    //         fontFamily:'Anton',
    //         fontSize:'30px',
    //         color:'#e2fe0b'
    //     }
    //         this.text1=this.add.text(
    //             game.config.width/2,
    //             game.config.height/2,
    //             "HELLO I'M WANT",
    //             textConfig);

    //         this.text1.setOrigin(.5,.5);
    //         this.text1.setStroke(white,1);
    //         this.text1.setShadow(2,2,white,1,false,true);
    }
    onDown(){this.face.alpha=.5;}
    onUp(){this.face.alpha=1;}


    doWalk(){
        this.tweens.add({
            targets: this.char, 
            duration: 1000,
            x:game.config.width, 
            y:0, 
            alpha:0, 
            onComplete:this.onCompleteHandler.bind(this)
        });
    }
    onCompleteHandler(tween, targets, custom){
        const char = targets[0];
        char.x = 0;
        char.y = game.config.height/2;
        char.alpha =1;
        this.doWalk();
    }
    update(){
        //조건문이나 반복문 정의
    
    }

}