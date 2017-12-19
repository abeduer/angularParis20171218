import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './components/menu/menu.component';
import { FormComponent } from './components/form/form.component';
import { StateDirective } from './directives/state/state.directive';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    MenuComponent,
    FormComponent,
    StateDirective
  ],
  exports: [
    MenuComponent,
    FormComponent,
    StateDirective
  ]
})
export class SharedModule { }
