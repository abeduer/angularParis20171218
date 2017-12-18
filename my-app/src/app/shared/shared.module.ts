import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
