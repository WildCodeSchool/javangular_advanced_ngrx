import { createAction, props } from "@ngrx/store";
import { Task } from './todo.model';

export const list = createAction('[Todo] List');
export const add = createAction('[Todo] Add', props<Task>());
export const markDone = createAction('[Todo] Mark Done', props<Task>());
export const reset = createAction('[Todo] Reset');