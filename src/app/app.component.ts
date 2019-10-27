import { Component, OnInit } from '@angular/core';
import { of, Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular8-empty';
 
  
   
  public handleClick(component) {
    console.log("Hello Circle", component);
  }
  public configStage: Observable<any> = of({
    width: 1440,
    height: 100
  });
  public configStage2: Observable<any> = of({
    width: 1440,
    height: 200,
    
  });
  poly: any[]=[];
  z=100;
  zz=62.5;
  
  ngOnInit() {
    let zx=0;
     for(let i=1;i<5;i++){
       zx=zx+this.zz*2;
       
      // public this.title+i: Observable<any> = of({
      //   x: zx,
      //   y: 100,
      //   sides: 6,
      //   radius: 70,
      //   fill: 'red',
      //   stroke: 'black',
      //   strokeWidth: 4,
      //   shadowOffsetX : 20,
      //   shadowOffsetY : 25,
      //   shadowBlur : 40,
      //   opacity : 0.5
      // });
      this.poly.push(of({
        x: zx,
        y: 100,
        sides: 6,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        shadowOffsetX : 20,
        shadowOffsetY : 25,
        shadowBlur : 40,
        opacity : 0.5
      })); 
     }
     
  }
  public configRegularPolygon: Observable<any> = of({
    x: 100,
    y: 100,
    sides: 6,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX : 20,
    shadowOffsetY : 25,
    shadowBlur : 40,
    opacity : 0.5
  });
  public configRegularPolygon2: Observable<any> = of({
    x: 225,
    y: 100,
    sides: 6,
    radius: 70,
    fill: 'rgb(255,215,0,1)',
    stroke: 'gold',
    strokeWidth: 4,
    shadowOffsetX : 20,
    shadowOffsetY : 25,
    shadowBlur : 40,
    opacity : 0.5
  });
  public configRegularPolygon3: Observable<any> = of({
    x: 162.5,
    y: 208,
    sides: 6,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX : 20,
    shadowOffsetY : 25,
    shadowBlur : 40,
    opacity : 0.5
  });
  public configRegularPolygon4: Observable<any> = of({
    x: 162.5+62.5*2,
    y: 208,
    sides: 6,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX : 20,
    shadowOffsetY : 25,
    shadowBlur : 40,
    opacity : 0.5
  });
  public configRegularPolygon5: Observable<any> = of({
    x: 162.5+62.5*2+62.5*2,
    y: 208,
    sides: 6,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX : 20,
    shadowOffsetY : 25,
    shadowBlur : 40,
    opacity : 0.5
  });
  
}
