class ToggleButton extends Phaser.GameObjects.Container{
    constructor(config){
        super(config.scene);
        this.scene=scene;

        this.back = this.scene.add.image(0,0,config.backKey);
    }
}