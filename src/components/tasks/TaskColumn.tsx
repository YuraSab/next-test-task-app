import React from 'react';
import TaskCard from './TaskCard';
import { Task, TaskStatus } from '@/api/tasks';

interface TaskColumnProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  loading: boolean;
}

const TaskColumn = ({ title, status, tasks, loading }: TaskColumnProps) => {
  const filteredTasks = tasks.filter(task => task.status === status);

  if (loading) {
    return (
      <div className="w-full flex flex-col space-y-4">
        <h3 className="text-lg font-semibold">{title} (0)</h3>
        <div className="h-28 bg-gray-100 rounded-lg animate-pulse"></div>
        <div className="h-28 bg-gray-100 rounded-lg animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4 min-w-[280px] w-full max-w-[320px]">
      <h3 className={`text-base font-medium tracking-wide`}>
        {title} ({filteredTasks.length})
      </h3>
      <div className="grid grid-rows-3 gap-4 h-full">
        {
          Array(3).fill(null).map((_, index) => {
            const task = filteredTasks[index];
            return task
              ? <TaskCard key={task.id} task={task} />
              : <div key={index} className="border-2 border-dashed border-gray-300 rounded-xl h-full transition-all"></div>
        })}
      </div>
    </div>
  );
}

export default TaskColumn;