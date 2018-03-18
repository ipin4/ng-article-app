import { Store } from '@ngrx/store';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as todosReducer from '../reducers/add-item.reducer';
import * as fromAddActions from '../actions/add-item.actions';
import * as fromListActions from '../actions/item-list.actions';
import { TodosState } from '../reducers/app.states';
import { Todos, ALL_TODOS } from '../models/add-item';
import { FilterParams } from '../models/filter-params';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  todos: Observable<Todos[]>;
  filterParams: FilterParams;
  showedTodos: Array<Todos>;

  constructor(
    private store: Store<TodosState>,
    private router: Router,
    private route: ActivatedRoute) {
    this.todos = store.select(todosReducer.getTodos);
  }

  openContent(index) {
    this.store.dispatch(
      new fromListActions.OpenContentAction(ALL_TODOS, index));
  }

  openEdit(id) {
    this.router.navigate([`list/edit/${id}`]);
  }

  sortTodos() {
    this.showedTodos = ALL_TODOS.sort((a, b) => a.date > b.date ? 1 : -1);
  }

  ngOnInit() {
    this.store.dispatch(new fromAddActions.AllTodosAction(ALL_TODOS));
    this.sortTodos();
  }

}
