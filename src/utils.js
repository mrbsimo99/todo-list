"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterTodos = filterTodos;
exports.convertArrayToRecord = convertArrayToRecord;
function filterTodos(todos, predicate) {
    return todos.filter(predicate);
}
function convertArrayToRecord(todos) {
    return todos.reduce((acc, todo) => {
        acc[todo.id] = todo;
        return acc;
    }, {});
}
