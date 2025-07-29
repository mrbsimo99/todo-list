// Creare ua Classe per gli Utenti
// Metodi della classe User

import { Todo } from "./types";

export class User {
    id: number;
    name: string;
    email?: string;
    todos: Todo[] = [];

    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        if (email) {
            this.email = email;
        }
    }

    addTodo(todo: Todo): void {
        this.todos.push(todo);
    }
}
