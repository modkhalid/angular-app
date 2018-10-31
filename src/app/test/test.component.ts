import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  		<button (mouseover)=onclickFun($event)>clickme</button>
  		{{name}}
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  name:string
  onclickFun(event){
  	console.log(event)
  	this.name=event.type;
  }







  // binding in angular
  // myid="khalid"
  // hh="a b c"
  // classObject={
  // 	a:true,
  // 	b:false,
  // 	c:true,
  // 	d:true
  // }

  // obj={
  // 	color:"pink",
  // 	textDecoration:"underline",
  // 	fontSize:"100px"
  // }
  // colorName="red"
  // ifFlag=false


  // some=false
  // isDisabled:boolean=false



  ngOnInit() {
  }

}
