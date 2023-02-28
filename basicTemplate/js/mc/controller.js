class Controller{
    constructor(){
        emitter.on(G.SET_SCORE, this.setScore);
        emitter.on(G.UP_POINTS, this.upPoints);
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