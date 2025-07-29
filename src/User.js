"use strict";
// Creare ua Classe per gli Utenti
// Metodi della classe User
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email) {
        this.todos = [];
        this.id = id;
        this.name = name;
        if (email) {
            this.email = email;
        }
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
}
exports.User = User;
