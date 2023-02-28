class Collision {
    //물체 간 충돌을 감지하는 클래스
    // x,y좌표 값 간의 거리(절대값)를 구하고 중심부와의 거리보다 가까우면 true
    static checkCollide(obj1, obj2){
        var distX = Math.abs(obj1.x - obj2.x);
        var distY = Math.abs(obj1.y - obj2.y);
        if(distX<obj1.width/2){
            if(distY<obj1.height/2) return true;
        }
        return false;
    }
}