import { createReducer, on } from "@ngrx/store";
import { list, add, markDone, reset } from './todo.actions';
import { TodoState } from "./todo.model";

const initialState: TodoState = {
  tasks: []
};

export const todoReducer = createReducer(initialState,
  on(list, (state) => ({...state})),
  on(add, (state, task) => ({ tasks: [...state.tasks, task] })),
  on(markDone, (state, task) => ({ tasks: [
    ...state.tasks.filter(x => x.description !== task.description),
    { ...task, done: !task.done }
    ] })),
  on(reset, (state) => ({ tasks: [] }))
);