class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload(){
       this.load.image("road", "/phaser-rapid_game/images/road.jpg");
       this.load.image("cars", "/phaser-rapid_game/images/cars.png",{frameWidth:60, frameHeight:126});
    }
    create(){
      var road = new Road({scene:this});
      road.x = game.config.width/2;

      var car = this.add.image(0,0,"cars");
      Align.center(car);
    }
    update(){
    
    }
}