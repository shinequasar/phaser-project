//게임에서 사용 할 정렬 및 크기 조절 클래스
class Align{
    static scaleTodGameW(obj, per){ //게임 폭에 대한 스케일
        obj.displayWidth = game.config.width*per; //가져온 객체와 백분율을 곱하기
        obj.scaleY = obj.scaleX;
    }
    static center(obj){
        obj.x = game.config.width/2;
        obj.y = game.config.height/2;
    }
}