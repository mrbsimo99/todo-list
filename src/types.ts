export enum TodoStatus {
    Pending = "Pending",
    InProgress = "In Progress",
    Completed = "Completed"
}

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
    metadata?: any;
    status: TodoStatus;
}

export interface User {
    id: number;
    name: string;
    email?: string;
    readonly todos: Todo[];
}

export interface TodowithMetadata extends Todo {
    metadata: any;
}

export interface Project {
    users: User[];
    todos: Todo[];
}
