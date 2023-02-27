class Road extends Phaser.GameObjects.Container{
    constructor(config){
        super(config.scene);
        this.scene = config.scene;
        this.back = this.scene.add.image(0,0,"road");
        this.add(this.back);
        this.scene.add.existing(this);

        this.back.displayWidth = game.config.width * .5;
        this.back.scaleY = this.back.scaleX;

        this.setSize(this.back.displayWidth, game.config.height);
        console.log(this);
    }
}