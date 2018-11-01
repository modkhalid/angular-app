import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title:string="modkhalid"
  name:string=""

  message:string=""


  khalid="a"
  anas="d"
  isFLag=true
  comp={
  	a:true,
  	d:true
  }
  
  onclick(str){
    this.name=str;
    console.log(this.name)
  }
}
