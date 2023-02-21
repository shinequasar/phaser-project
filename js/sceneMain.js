class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload(){
        //이미지나 소리를 로드하는 곳
        this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
    }
    create(){
        //객체들을 정의하는 것
        this.char = this.add.sprite(0, game.config.height/2, "boy");
        var frameNames= this.anims.generateFrameNumbers('boy'); //밑에 key,frame을 생략하고 이렇게 만들어도 됨
        this.anims.create({
            key: 'walk',
            frames: frameNames,
            frameRate: 16, //속도
            repeat: -1 //반복횟수 (-1로 두면 영원히 움직임)
        });
        this.char.play('walk');
        this.doWalk();
    }
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
        // console.log("완성!");
    }
    update(){
        //조건문이나 반복문 정의
    
    }

}