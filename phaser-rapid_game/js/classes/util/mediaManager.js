class MediaManager{
    constructor(config){
        this.scene = config.scene;
        emitter.on(G.PLAY_SOUND, this.playSound, this);
        emitter.on(G.PLAY_SFXSOUND, this.playSFXSound, this);
        emitter.on(G.MUSIC_CHANGED, this.musicChanged, this);
    }
    musicChanged(){
        if(this.background) {
            if(model.musicOn == false) 
                this.background.stop();
            else 
                this.background.play();
        }
    }
    playSound(key){
        if(model._soundOn == true){
            const sound = this.scene.sound.add(key);
            sound.play();
        }
    }
    playSFXSound(key){
        if(model._soundOn == true){
            const sound = this.scene.sound.add(key);
            sound.setVolume(0.03);
            sound.play();
        }
    }
    setBackgroundMusic(key){
        if(model._soundOn == true){
            this.background = this.scene.sound.add(key,{
                volume:.3,
                loop:true
            });
            this.background.play();
        }
    }
}