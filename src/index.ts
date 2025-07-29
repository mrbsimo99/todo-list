import { Todo, Project, TodoStatus } from "./types";
import { User } from "./User";
import { filterTodos, convertArrayToRecord } from "./utils";

const todos: Todo[] = [];

let newId = 1;

function addTodo(title: string, metadata?: string | object): Todo {
    const newTodo: Todo = {
        id: newId++,
        title,
        completed: false,
        metadata,
        status: TodoStatus.Pending,
    };
    todos.push(newTodo);
    return newTodo;
}

addTodo("3x8-10 Panca Piana", "metadata");
addTodo("3x max Dips", "metadata");

console.log(todos);

// Utilizzare la classe User

const user1 = new User(1, "Giovanni Belardi", "giovanni.belardi@example.com");
const user2 = new User(2, "Franco Neri");

// const todo1 = addTodo("3x8-10 Panca Piana", "metadata");
// const todo2 = addTodo("3x max Dips", "metadata");

// user1.addTodo(todo1);
// user2.addTodo(todo2);

console.log("Todo utente 1:", user1.todos);
console.log("Todo utente 2:", user2.todos);

// Utilizzare Mapped Types
type PartialTodo = Partial<Todo>;

function updatePartialTodo(todoId: number, fieldsToUpdate: PartialTodo): Todo | undefined {
    const index = todos.findIndex(todo => todo.id === todoId);

    if (index === -1) {
        console.error(`${todoId} non trovato.`);
        return undefined;
    }

    todos[index] = { ...todos[index], ...fieldsToUpdate };
    return todos[index];
}

function updateTodoStatus(todoId: number, status: TodoStatus): Todo | undefined {
    const index = todos.findIndex(todo => todo.id === todoId);

    if (index === -1) {
        console.error(`${todoId} non trovato`);
        return undefined;
    }

    todos[index].status = status;
    return todos[index];
}

updateTodoStatus(1, TodoStatus.Completed);
console.log("Todos aggiornati:", todos);

// Creare una funzione generica per il filtro dei Todo
const pendingTodos = filterTodos(todos, todo => todo.status === TodoStatus.Pending);
console.log("Todos pendenti:", pendingTodos);

// Utilizzare Record
const todosRecord = convertArrayToRecord(todos);
console.log("Todos da registrare:", todosRecord);
