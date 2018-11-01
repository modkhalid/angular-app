import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  
  @Input('parentData') public  name;

  @Output() public childEmitter=new EventEmitter();

  emitter(val){
  	this.childEmitter.emit(val)
  }





















  // colors=["red","green","pink","blue","djfhk","orange"]



















  // colorVar:string=""
  // onClick(str){
  	
  // 	this.colorVar=str
  // 	console.log(this.colorVar)
  // }
















  // myVar=true;

  // counter:number=0;
 	// onClick(){
 	// 	this.counter++;
 	// 	if(this.counter%2==0){
 	// 		this.myVar=false;
 	// 	}else{
 	// 		this.myVar=true;
 	// 	}
 	// }















  // 	// name:string=""
  // 	// l=name.length();
  // 	name:string=""
  // 	khalid=name;
 	// onclick(value){
 	// 	console.log(value);
 	// }










  // click or event $event etc
  // name:string
  // onclickFun(event){
  // 	console.log(event)
  // 	this.name=event.type;
  // }







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
