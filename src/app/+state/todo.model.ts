export interface AppState {
    todo: TodoState
}

export interface TodoState {
    tasks: Task[]
}

export interface Task {
    description: string;
    done?: boolean;
}