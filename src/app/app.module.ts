import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { reducer } from './ngrx/reducer';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
