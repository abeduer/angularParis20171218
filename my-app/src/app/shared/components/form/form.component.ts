import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  stateLibelle = Object.values(State);
  form: FormGroup;

  @Input('item') item: Item;

  @Output() doDelete: EventEmitter<Item> = new EventEmitter();
  @Output() dataItem: EventEmitter<Item> = new EventEmitter();

  constructor(private _FormBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.form = this._FormBuilder.group({
      name: [
        this.item ? this.item.name : '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: [
        this.item ? this.item.reference : '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: this.item ? this.item.state : State.ALIVRER
    });
  }

  isFieldOnError(fieldName: string): boolean {
    return this.form.get(fieldName).touched && this.form.get(fieldName).invalid;
  }

  process(): void {
    this.dataItem.emit({
      id: this.item ? this.item.id : '',
      name: this.form.controls['name'].value,
      reference: this.form.controls['reference'].value,
      state: this.form.controls['state'].value
    });
    this.reset();
    this.openModal();
  }

  openModal(): void {}

  delete(): void {
    this.doDelete.emit(this.item);
  }

  reset(): void {
    this.form.reset();
    this.form.controls['state'].setValue(State.ALIVRER);
  }
}
