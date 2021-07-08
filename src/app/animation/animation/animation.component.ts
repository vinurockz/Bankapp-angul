import { animate, state, style, transition, trigger } from '@angular/animations';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'500px',
        backgroundColor:'green'
      })),
      state('close',style({
        height:'200px',
        backgroundColor:'white'
      })),
      transition('open=>close',[
        animate('1s')
      ]),
      transition('close=>open',[
        animate('1s')
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {
isOpen=true;
  constructor() { }

  ngOnInit(): void {
  }
toggle(){
  this.isOpen=! this.isOpen
}
}
