class Controller{
    constructor(){
        emitter.on(G.SET_SCORE, this.setScore);
        emitter.on(G.UP_POINTS, this.upPoints);
        emitter.on(G.TOGGLE_SOUND, this.toggleSound);
        emitter.on(G.TOGGLE_MUSIC, this.toggleMusic);
    }
    toggleMusic(val){
        model.musicOn=val;
    }
    toggleSound(val){
        model.soundOn=val;
    }
    setScore(score){
        model.score = score;  //모델에서 직접 score 설정
    }
    upPoints(points){
        var score = model.score;
        score+=points;
        model.score = score;
    }
}