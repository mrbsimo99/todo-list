"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const User_1 = require("./User");
const utils_1 = require("./utils");
const todos = [];
let newId = 1;
function addTodo(title, metadata) {
    const newTodo = {
        id: newId++,
        title,
        completed: false,
        metadata,
        status: types_1.TodoStatus.Pending,
    };
    todos.push(newTodo);
    return newTodo;
}
addTodo("3x8-10 Panca Piana", "metadata");
addTodo("3x max Dips", "metadata");
console.log(todos);
// Utilizzare la classe User
const user1 = new User_1.User(1, "Giovanni Belardi", "giovanni.belardi@example.com");
const user2 = new User_1.User(2, "Franco Neri");
// const todo1 = addTodo("3x8-10 Panca Piana", "metadata");
// const todo2 = addTodo("3x max Dips", "metadata");
// user1.addTodo(todo1);
// user2.addTodo(todo2);
console.log("Todo utente 1:", user1.todos);
console.log("Todo utente 2:", user2.todos);
function updatePartialTodo(todoId, fieldsToUpdate) {
    const index = todos.findIndex(todo => todo.id === todoId);
    if (index === -1) {
        console.error(`${todoId} non trovato.`);
        return undefined;
    }
    todos[index] = Object.assign(Object.assign({}, todos[index]), fieldsToUpdate);
    return todos[index];
}
function updateTodoStatus(todoId, status) {
    const index = todos.findIndex(todo => todo.id === todoId);
    if (index === -1) {
        console.error(`${todoId} non trovato`);
        return undefined;
    }
    todos[index].status = status;
    return todos[index];
}
updateTodoStatus(1, types_1.TodoStatus.Completed);
console.log("Todos aggiornati:", todos);
// Creare una funzione generica per il filtro dei Todo
const pendingTodos = (0, utils_1.filterTodos)(todos, todo => todo.status === types_1.TodoStatus.Pending);
console.log("Todos pendenti:", pendingTodos);
// Utilizzare Record
const todosRecord = (0, utils_1.convertArrayToRecord)(todos);
console.log("Todos da registrare:", todosRecord);
