"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = [];
function addTodo(title) {
    const newTodo = {
        id: todos.length + 1,
        title,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
}
addTodo("Compra il latte");
addTodo("Compra i biscotti");
console.log(todos);
