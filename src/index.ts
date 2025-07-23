import { Todo, TodowithMetadata, User } from "./types";

// Implementare interfaccia Todo

const todos: Todo[] = [];

// Aggiungere una funzione per Aggiungere un Todo

let newId = 1;

// Funzione che tiene conto di metadata opzionale con any

/* function addTodo(title: string, metadata?: any): Todo {
    const newTodo: Todo = {
        id: newId++,
        title,
        completed: false,
        metadata
    };

    todos.push(newTodo);
    return newTodo
} */

// Funzione che tiene conto dell'extends TodowithMetadata

/* function addTodo(title: string, metadata: any): TodowithMetadata {
   const newTodo: TodowithMetadata = {
       id: newId++,
       title,
       completed: false,
       metadata
   };

   todos.push(newTodo);
   return newTodo
} */

function addTodo(title: string, metadata?: string | object): Todo {
    const newTodo: Todo = {
        id: newId++,
        title,
        completed: false,
        metadata
    };
    todos.push(newTodo);
    return newTodo
}

addTodo("3x8-10 Panca Piana", "metadata");
addTodo("3x max Dips", "metadata")

console.log(todos);

function updateTodo(todoId: number, fieldsToUpdate: Partial<Todo>): Todo | undefined {
    const index = todos.findIndex(todo => todo.id === todoId);

    if (index === - 1) {
        console.error(`${todoId} non trovato.`)
        return;
    }

    const updatedTodo = {
        ...todos[index],
        ...fieldsToUpdate
    };

    todos[index] = updatedTodo;

    return updatedTodo;
}

updateTodo(1, { title: "3x6-8 Inclined Chest Press", completed: false })
console.log(todos)

// Associare Todo con Utenti

const users: User[] = [];
let newUserId = 1;

function addUser(name: string, email?: string): User {
    const newUser: User = {
        id: newUserId++, // userId :newUserId++
        name,
        email,
        todos: []

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

function getUserTodos(userId: number): Todo[] {
    return todos.filter(todo => todo.userId === userId);
}

const userTodos = getUserTodos(1);
const userTodos2 = getUserTodos(2);

console.log(userTodos);
console.log(userTodos2);


// Gestione degli Errori con Never

const throwError = (message?: string): never => {
    throw new Error(message);
}

// Gestione dei Tipi Dinamici con Unknown

function parseInput(input: unknown): string {
    if (typeof input === "string") {
        return input
    } if (typeof input === "number") {
        return input.toString()
    }
    return throwError("Errore interno")
};

console.log(parseInput(20));
console.log(parseInput("Ciao"))

// Utilizzare Tuple

function getTodoSummary(todoId: number): [string, boolean] | undefined {
    const todo = todos.find(todo => todo.id === todoId);

    if (!todo) {
        console.error(`${todoId} non trovato`)
        return;
    }
    return [todo.title, todo.completed];
}

const summary = getTodoSummary(1);
console.log("Summary:", summary);
