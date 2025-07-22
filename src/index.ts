import { Todo, User } from "./types";

// Implementare interfaccia Todo

const todos: Todo[] = [];

// Aggiungere una funzione per Aggiungere un Todo

let newId = 1;

function addTodo(title: string): Todo {
    const newTodo: Todo = {
        id: newId++,
        title,
        completed: false
    };

    todos.push(newTodo);
    return newTodo
}
addTodo("3x8-10 Panca Piana");
addTodo("3x max Dips")

console.log(todos)

// Associare Todo con Utenti

const users: User[] = [];
let newUserId = 1;

function addUser(name: string, email?: string): User {
    const newUser: User = {
        id: newUserId++, // userId :newUserId++
        name,
        email
    };

    users.push(newUser);
    return newUser
}

addUser("Giovanni Belardi", "giovanni.belardi@example.com");
addUser("Franco Neri");

console.log(users);

function assignTodoToUser(todoId: number, userId: number): Todo | string {
    const todo = todos.find(todo => todo.id === todoId);
    const user = users.find(user => user.id === userId); // const user = users.find(user => user.userId === userId);

    if (!todo) {
        return `${todoId} non trovato`;
    }
    if (!user) {
        return `${userId} non trovato`;
    }

    todo.userId = user.id; // todo.userId = user.userId

    return todo;
}

assignTodoToUser(1, 1);
assignTodoToUser(2, 2);

console.log(todos);
console.log(users)

// Creare una funzione per ottenere i Todos di un utente

function getUserTodos(userId: number) : Todo[] {
    return todos.filter(todo => todo.userId === userId);
}

const userTodos = getUserTodos(1);
const userTodos2 = getUserTodos(2);

console.log(userTodos);
console.log(userTodos2);
