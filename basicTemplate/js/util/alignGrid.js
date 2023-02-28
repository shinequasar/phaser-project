//화면크기가 달라져도 그리드 기반으로 배치할 수 있게
class AlignGrid{
    constructor(config){
        this.config=config;
        if(!config.scene){
            console.log("현재 씬이 존재하지 않습니다.");
            return;
        }
        if(!config.rows) config.rows=5;
        if(!config.cols) config.cols=5;
        if(!config.height) config.height = game.config.height;
        if(!config.width) config.width = game.config.width;

        this.scene = config.scene;
        //높이와 너비를 행과 열로 나누기
        this.cw = config.width/config.cols; 
        this.ch = config.height/config.rows;
    }
    show(){
        this.graphics = this.scene.add.graphics();
        this.graphics.lineStyle(2,0xff000);

        for(let i = 0; i<this.config.width; i+=this.cw){
            this.graphics.moveTo(i,0);
            this.graphics.lineTo(i, this.config.height);
        }
        for(let i = 0; i<this.config.height; i+=this.ch){
            this.graphics.moveTo(0, i);
            this.graphics.lineTo(this.config.width, i);
        }
        //선 그리기
        this.graphics.strokePath();
    }
    //x,y행 둘다 지정해 위치시키는 메서드
    placeAt(xx,yy,obj){
        const x2 = this.cw*xx + this.cw/2;
        const y2 = this.ch*yy + this.ch/2;
  
        obj.x = x2;
        obj.y = y2;
      }
      //특정 n번째 칸지정해 위치시키는 메서드
      placeAtIndex(index, obj){
        const yy = Math.floor(index/this.config.cols);
        const xx = index-(yy*this.config.cols);
        this.placeAt(xx,yy,obj);
      }
      //그리드 숫자 보기
      showNumbers(){
        this.show();
        let count = 0;
        for(let i=0; i<this.config.rows; i++){
            for(let j=0; j<this.config.cols; j++){
                const numText = this.scene.add.text(0,0,count,{color:'#00ff00'});
                numText.setOrigin(0.5,0.5);
                this.placeAtIndex(count, numText);
                count++;
            }
        }
      }
}