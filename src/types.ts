export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
    metadata?: any; // Utilizzare tipo any
}

export interface User {
    id: number,
    name: string,
    email?: string;
    todos: ReadonlyArray<Todo>
}


// Creare Tipi derivati con Extends

export interface TodowithMetadata extends Todo {
    metadata: any
}