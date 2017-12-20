import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ItemsModule } from './items/items.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AppRoutingModule } from './app-routing.module';

import { CollectionService } from './core/services/collection/collection.service';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ItemsModule,
    PageNotFoundModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
