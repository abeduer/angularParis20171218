import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './components/menu/menu.component';
import { FormComponent } from './components/form/form.component';

import { StateDirective } from './directives/state/state.directive';
import { PaginateComponent } from './components/paginate/paginate.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    FormComponent,
    StateDirective,
    PaginateComponent,
    ModalComponent
  ],
  exports: [MenuComponent, FormComponent, StateDirective, PaginateComponent]
})
export class SharedModule {}
