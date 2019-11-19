import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
   
  weekArray: string[];
  weekArrayShort: string[];
  weekdays: {weekDay: string, weekDayShort: string}[]=[];
  weekdays2: {weekDay: string, weekDayShort: string}[]=[];
  constructor( ) {
    // this.from_date = this.today.startOf('week');
    // this.to_date = this.today.endOf('week');
    // console.log({'startDay':  this.from_date, 'endDay' : this.to_date}  );
    this.weekArray = moment.weekdays();
    this.weekArrayShort = moment.weekdaysShort();
    console.log({'week':  this.weekArray, 'short': this.weekArrayShort}  );
    for(let i=0; i<this.weekArray.length;i++){
      this.weekdays.push({weekDay: this.weekArray[i], weekDayShort:this.weekArrayShort[i]});
    }
    console.log('week', moment().startOf('week'));
    console.log('week', moment().endOf('week'));
    for(let i=0; i<this.weekArray.length;i++){
      this.weekdays2.push({weekDay: moment().startOf('week').add(i, 'days').format("dddd, MMMM  DD, YYYY") , weekDayShort:moment().startOf('week').add(i, 'days').format("MMMM,dd,yyyy")});
    }
   }

  ngOnInit() {
  }

}
