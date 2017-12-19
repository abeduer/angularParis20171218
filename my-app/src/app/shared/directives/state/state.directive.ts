import { Directive, Input, OnChanges, HostBinding, ElementRef } from '@angular/core';
import { State } from '../../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input('appState') appState: string;

  @HostBinding('class')
  elementClass = '';

  @HostBinding('innerText')
  elementText = '';

  constructor() { }

  private _removeAccents(state: string): string {
    // https://stackoverflow.com/a/37511463
    return state.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private _formatCssClass(state: string): string {
    return this._removeAccents(state).toLowerCase().replace(' ', '');
  }

  ngOnChanges(): void {
    // console.log(this.appState);
    this.elementClass = `state-${this._formatCssClass(this.appState)}`;

    this.elementText = this.appState;
  }
}
