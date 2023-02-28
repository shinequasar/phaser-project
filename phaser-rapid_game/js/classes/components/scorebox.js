class ScoreBox extends Phaser.GameObjects.Container{
    constructor(config){
        super(config.scene);
        this.scene = config.scene;

        this.text1 = this.scene.add.text(0,0,"점수 : 0",{color:'#00ff00'});
        this.text1.setOrigin(0.5,0.5);
        this.add(this.text1);

        this.scene.add.existing(this);
        
        emitter.on(G.SCORE_UPDATED, this.scoreUpdated, this);
    }
    scoreUpdated(){
        this.text1.setText("점수 : " + model.score);
    }
}