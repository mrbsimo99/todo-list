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
    readonly todos: Todo[];
}


// Creare Tipi derivati con Extends

export interface TodowithMetadata extends Todo {
    metadata: any
}

export interface Project {
    users: User[],
    todos: Todo[];
}