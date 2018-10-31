import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  		<p [class.hh]="hasError">hello world</p>
		<input bind-disabled="isDisabled" type="text" name="khslid" id={{myid}}>
		<button (click)=fun()>clickme</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  myid="khalid"
  hh="hh"
  hasError=true
  fun(){
  	// alert("modkhalid")
  	this.hh="mm";
  }
  isDisabled:boolean=false
  ngOnInit() {
  }

}
