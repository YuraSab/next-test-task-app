'use client';

import { fetchTasks } from "@/api/tasks";
import { useQuery } from "@tanstack/react-query";

export function useTasks() {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: fetchTasks
    });
}