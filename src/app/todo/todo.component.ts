import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Task, TodoState } from '../+state/todo.model';
import * as fromTodo from '../+state/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodosComponent implements OnInit {

  task!: string;
  tasks$ = this.store.select(x => x.todo.tasks);

  constructor(private store: Store<AppState>) {}
  
  ngOnInit(): void {}

  onAdd = () => {
    this.store.dispatch(fromTodo.add({ description: this.task }));
    this.task = '';
  }
  onMarkDone = (task: Task) => this.store.dispatch(fromTodo.markDone(task));
  onReset = () => this.store.dispatch(fromTodo.reset());

}
