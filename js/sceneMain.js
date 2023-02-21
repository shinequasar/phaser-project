class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload(){
        //이미지나 소리를 로드하는 곳
        this.load.image("wj", "images/wj.png");
    }
    create(){
        //객체들을 정의하는 것
        console.log("Ready!");
        this.face = this.add.image(0, 0, "wj");

        //전체 게임 씬 크기에서 
        this.face.x = game.config.width/2;
        this.face.y = game.config.height/2;


        // this.face.alpha = .5; //투명도
        // this.face.scaleX = .5; //크기
        // this.face.scaleY = .5; //크기

        //가로세로 정비율 만들기
        // this.face.displayWidth = 100;
        // this.face.scaleX = this.face.scaleY;
    }
    update(){
        //조건문이나 반복문 정의
    }

}