'use client';

import React from 'react';
import TaskColumn from '@/components/tasks/TaskColumn';
import { useTasks } from '@/hooks/useTasks';
import { TaskStatus } from '@/api/tasks';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

const columns: { title: string; status: TaskStatus }[] = [
    { title: 'To do', status: 'to-do' },
    { title: 'In progress', status: 'in-progress' },
    { title: 'Review', status: 'review' },
    { title: 'Completed', status: 'completed' },
];

export default function DashboardPage() {
  const { data: tasks = [], isLoading, isError } = useTasks();
  
  const currentDate = new Date('2025-05-29'); 
  const formattedDate = format(currentDate, 'EEEE, d MMM yyyy', { locale: enUS });
  
  if (isError)
    return <div className="text-red-500 text-center p-8">Error loading tasks. Please check API URL.</div>;
  
  return (
    // <div className="font-poppins p-12">
    // <div className="flex flex-col h-full font-poppins p-12 overflow-x-hidden">
      <div className="flex flex-col min-h-screen font-poppins p-12">

      <h1 className="text-xl font-medium mb-1">My Tasks</h1>
      <p className="text-sm font-normal text-gray-400 mb-8">{formattedDate}</p>

      {/* <div className="flex space-x-6 overflow-x-auto pb-4 items-stretch"> */}
      {/* <div className="flex space-x-6 overflow-x-auto pb-4 items-stretch max-w-full"> */}
      {/* <div className="flex space-x-6 overflow-x-auto pb-4 items-stretch max-w-full w-full pr-16"> */}
      {/* <div className="flex space-x-6 overflow-x-auto pb-4 items-stretch w-full"> */}


<div className="relative isolate max-w-[100vw] overflow-x-auto pb-4">
  <div className="flex space-x-6 items-stretch min-w-max pr-20">
        {columns.map(column => (
          <TaskColumn
            key={column.status}
            title={column.title}
            status={column.status}
            tasks={tasks}
            loading={isLoading}
          />
        ))}
      </div>
</div>

    </div>
  );
}