import { Todo } from "./types";

export function filterTodos(todos: Todo[], predicate: (todo: Todo) => boolean): Todo[] {
    return todos.filter(predicate);
}

export type TodoRecord = Record<number, Todo>;

export function convertArrayToRecord(todos: Todo[]): TodoRecord {
    return todos.reduce((acc, todo) => {
        acc[todo.id] = todo;
        return acc;
    }, {} as TodoRecord);
}
