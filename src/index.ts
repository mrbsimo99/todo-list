import { Todo } from "./types";

const todos : Todo[] = [];

function addTodo(title: string) : Todo {
    const newTodo: Todo = {
        id: todos.length + 1,
        title,
        completed: false
    };

    todos.push(newTodo);
    return newTodo
}
addTodo("Compra il latte");
addTodo("Compra i biscotti")

console.log(todos)
