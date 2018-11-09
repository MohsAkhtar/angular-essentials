import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Output() sideAssigned = new EventEmitter<{ name: string; side: string }>();

  constructor() {}

  ngOnInit() {}

  onAssign(side) {
    // this.character.side = side; // sub optimal we do not want to change refernce types n different components, hard to maintain
    this.sideAssigned.emit({ name: this.character.name, side: side });
  }
}
