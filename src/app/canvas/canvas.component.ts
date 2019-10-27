import { Component, OnInit,ViewChild , ElementRef,HostListener} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  @HostListener('click', ['$event'])
  onMousemove(event: MouseEvent) {
     
      let x=event.clientX-this.ctx.offsetLeft;
      let y= event.clientY-this.ctx.offsetTop;
    
      // temp = floor(x + sqrt(3) * y + 1)
      // q = floor((floor(2*x+1) + temp) / 3);
      // r = floor((temp + floor(-x + sqrt(3) * y + 1))/3);
  }
   
  ctx:any;
   circles:any = [
    {
      id:1,
      x: 40,
      y: 40,
      radius: 10,
      color: 'rgb(255,0,0)'
    },
    {
      id:2,
      x: 70,
      y: 70,
      radius: 10,
      color: 'rgb(0,255,0)'
    }
  ];
  side:number=0;
  size: number=20;
  x:number=20;
  y:number=20;
  arr:any[]=[]; 
  arr2:any[]=[]; 
  constructor() {
   }
   rate: number=0.9
   
  ngOnInit() {
    this.ctx =this.canvasRef.nativeElement.getContext('2d');
    this.circles.forEach(circle => {
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = circle.color;
      this.ctx.fill();
    });
    this.ctx.beginPath();
    for(let i =0;i<20;i++){
      
      this.ctx.moveTo(this.x + this.size * Math.cos(0), this.y + this.size * Math.sin(0));
       
      for (this.side; this.side < 7; this.side++) {
        this.ctx.lineTo(this.x + this.size * Math.cos(this.side * 2 * Math.PI / 6), this.y + this.size * Math.sin(this.side * 2 * Math.PI / 6));
        console.log('x=>'+(this.x + this.size * Math.cos(this.side * 2 * Math.PI / 6))+" side "+   this.side);
        this.arr2.push({x:(this.x + this.size * Math.cos(this.side * 2 * Math.PI / 6)), y:(this.y + this.size * Math.sin(this.side * 2 * Math.PI / 6))});
        
      }
      this.ctx.clothePath();
      this.side=0;
      this.x=this.x+20;
    }
   
    console.log('arr2',this.arr2[3])
    let a= {
      x: this.x,
      y: this.y,
    }
    this.arr.push(a);
    let temp = Math.floor(this.x + Math.sqrt(3) * this.y + 1);
    let  q = Math.floor((Math.floor(2*this.x+1) + temp) / 3);
    let  r = Math.floor((temp + Math.floor(-this.x + Math.sqrt(3) * this.y + 1))/3);
    console.log('temp', temp);
    console.log('qItem', q);
    console.log('r', r);
    console.log('aItem', this.arr);
    this.side=0;
    this.ctx.strokeStyle= "#111111";
    this.ctx.fill();
  
}
}