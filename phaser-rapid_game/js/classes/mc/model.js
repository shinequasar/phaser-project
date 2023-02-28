class Model{
    constructor(){
        this._score = 0;
    }
    set score(val){
        this._score = val;
        // console.log("점수가 기록되었습니다!");
        emitter.emit(G.SCORE_UPDATED);
    }
    get score(){
        return this._score;
    }
}