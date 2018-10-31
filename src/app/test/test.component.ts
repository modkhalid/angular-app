import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  		<p [class]="hh" [class.b]="some">hello world</p>
  		<h1 [ngClass]="classObject" >this is test</h1>
		<input bind-disabled="isDisabled" type="text" name="khslid" id={{myid}}>
		<button (click)=fun()>clickme</button>


		<hr>
		<p [style.color]="colorName">modkhalid</p>
		<p [style.color]="ifFlag?'green':'orange'">modkhalid</p>
		<p [ngStyle]="obj">this is test heading</p>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  myid="khalid"
  hh="a b c"
  classObject={
  	a:true,
  	b:false,
  	c:true,
  	d:true
  }

  obj={
  	color:"pink",
  	textDecoration:"underline",
  	fontSize:"100px"
  }
  colorName="red"
  ifFlag=false


  some=false
  isDisabled:boolean=false
  ngOnInit() {
  }

}
