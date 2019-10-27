export class Square{
    /**
     *
     */
    private color ="red";
    private x = 0;
    private y = 0;
    private z = 30;
    constructor( private ctx: CanvasRenderingContext2D) {  }
    moveRight(){
        this.x++;
        this.draw();
    }
    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.z*this.x, this.z*this.y,this.z,this.z);
    }
    move(y:number, z:number){
        const max = this.ctx.canvas.width/z;
        const canvas = this.ctx.canvas;
        // for(let x =0; x<max; x++){
        //     this.ctx.clearRect(0,0,canvas.width, canvas.height);
        //   this.draw(x,y,z)
        // }
        let x = 0;
        const i = setInterval(()=>{
            this.ctx.clearRect(0,0,canvas.width, canvas.height);
            this.draw();
            x++;
            if(x>=max){
                clearInterval(i);
            }
        },200);
      }
}