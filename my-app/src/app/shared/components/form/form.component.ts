import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() dataItem: EventEmitter<Item> = new EventEmitter();

  constructor(private _FormBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.form = this._FormBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      reference: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      state: State.ALIVRER
    });
  }

  isFieldOnError(fieldName: string): boolean {
    return this.form.get(fieldName).touched && this.form.get(fieldName).invalid;
  }

  process(): void {
    this.dataItem.emit(this.form.value);
    this.reset();
    this.openModal();
  }

  openModal(): void {
  }

  reset(): void {
    this.form.reset();
    this.form.controls['state'].setValue(State.ALIVRER);
  }
}
