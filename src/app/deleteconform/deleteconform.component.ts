import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-deleteconform',
  templateUrl: './deleteconform.component.html',
  styleUrls: ['./deleteconform.component.css']
})
export class DeleteconformComponent implements OnInit {

  @Input() item : string|undefined|null

  @Output() onDelete = new EventEmitter;

  @Output() onCancel = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

delete(){
  this.onDelete.emit(this.item)
}

cancel(){
  this.onCancel.emit()
}

}
