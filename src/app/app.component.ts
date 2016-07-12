import { Component } from '@angular/core';
import { Slice, Reducer, Store } from 'redux-decorators';

@Slice('count', 0)
@Reducer('add', 'remove')
class ActionReducers {
    add(count) { return count + 1 }
    remove(count) { return count - 1 }
}

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>Redux Decorators - Angular 2 Demo</h1>
    <div>Count: {{count}}</div>
    <hr />
    <button (click)="dispatch('add')">Add</button>
    <button (click)="dispatch('remove')">Remove</button>
`
})
@Store('count')
export class AppComponent {}
