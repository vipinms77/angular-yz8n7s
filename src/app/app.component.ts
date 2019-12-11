import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  numberString;
  array: any[] = [];
  search:any;
  result: any;
  onClick(){
    if(this.numberString.trim()){
      this.array = this.numberString.split(',');
      if(this.array.length > 0 && this.search){
        this.result = this.array.indexOf(this.search);
      }
    } 
  }
}
