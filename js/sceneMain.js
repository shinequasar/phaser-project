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
        this.char = this.add.sprite(game.config.width/2, game.config.height/2, "boy");
        this.anims.create({
            key: 'walk',
            frames: [
                { key: 'boy',frame:0 },
                { key: 'boy',frame:1 },
                { key: 'boy',frame:2 },
                { key: 'boy',frame:3 },
                { key: 'boy',frame:4 },
                { key: 'boy',frame:5 },
            ],
            frameRate: 16, //속도
            repeat: -1 //반복횟수 (-1로 두면 영원히 움직임)
        });
        this.char.play('walk');
    }
    update(){
        //조건문이나 반복문 정의
    }

}