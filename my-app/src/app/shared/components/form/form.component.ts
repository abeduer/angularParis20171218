import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  stateLibelle = Object.values(State);
  newItem: Item;

  @Output() dataItem: EventEmitter<Item> = new EventEmitter();

  private _BLANK_ITEM = {
    name: '',
    reference: '',
    state: State.ALIVRER
  };

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  process(): void {
    this.dataItem.emit(this.newItem);
    this.reset();
  }

  reset(): void {
    this.newItem = Object.assign({}, this._BLANK_ITEM);
  }
}
