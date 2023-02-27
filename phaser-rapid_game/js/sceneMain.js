class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload(){
       this.load.image("road", "/phaser-rapid_game/images/road.jpg");
       this.load.image("cars", "/phaser-rapid_game/images/cars.png",{frameWidth:60, frameHeight:126});
       this.load.image("line", "/phaser-rapid_game/images/line.png");
    }
    create(){
      this.road = new Road({scene:this});
      this.road.x = game.config.width/2;
      this.road.makeLines();
    }
    update(){
      this.road.moveLines();
    }
}