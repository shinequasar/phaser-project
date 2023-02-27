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
    }
    create(){
      this.road = new Road({scene:this});
      this.road.x = game.config.width/2;
      this.road.makeLines();
    }
    update(){
      this.road.moveLines();
      this.road.moveObject();
    }
}