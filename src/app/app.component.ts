import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from './ngrx/reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  value: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.value = this.store.select('counter');
  }

  incr() {
    this.store.dispatch({ type: 'INCREMENT' });
  }

  desc() {
    this.store.dispatch({ type: 'DESCCREMENT' });
  }
}
