export type TaskStatus = "to-do" | "in-progress" | "review" | "completed";

export interface Task {
    id: string,
    title: string,
    description: string,
    createdAt: string,
    status: TaskStatus,
} 

export async function fetchTasks(): Promise<Task[]> {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    if (!API_BASE_URL)
        throw new Error("Base URL not defined !");

    const response = await fetch(`${API_BASE_URL}/tasks`);
    if (!response.ok)
        throw new Error(`Failed to fetch tasks: ${response.status}`);

    const data: Task[] = await response.json();
    return data;
}