class FlatButton extends Phaser.GameObjects.Container{
    constructor(config){
        if(!config.scene){
            console.log("씬이 존재하지 않습니다.");
            return;
        }
        if(!config.key){
            console.log("씬키가 존재하지 않습니다.");
            return;
        }
        super(config.scene);

        this.config = config; //클래스변수로 승격시키기(해당지역변수를 가져와 클래스 수준에서 참조)
        this.scene = config.scene;
        this.back = this.scene.add.image(0,0,config.key);

        this.add(this.back);  //버튼을 텍스트 뒤에 추가

        if(config.text){
            if(config.textConfig) 
                this.text1 = this.scene.add.text(0,0,config.text, config.textConfig);
            else 
                this.text1 = this.scene.add.text(0,0,config.text);

            this.text1.setOrigin(0.5,0.5);
            this.add(this.text1);
        }
        if(config.x) this.x = config.x;
        if(config.y) this.y = config.y;

        this.scene.add.existing(this);

        if(config.event){
            this.back.setInteractive();
            this.back.on('pointerdown', this.pressed, this);
        }
    }
    pressed(){
        if(this.config.params) emitter.emit(this.config.event, this.config.params);
        else emitter.emit(this.config.event);
    }
}