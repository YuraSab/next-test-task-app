import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, Clock } from 'lucide-react'; 
import { Task } from '@/api/tasks'; 
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale'; 
import { AvatarPlaceholder } from '../ui/AvatarPlaceholder';

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const formattedDate = format(new Date(task.createdAt), 'd MMMM', { locale: enUS });
  const isCompleted = task.status === 'completed';

  const dateBadgeClasses = isCompleted
    ? 'bg-completed-bg text-completed-text'
    : 'bg-[var(--color-badge-green)] text-white hover:bg-[var(--color-badge-green)]';
  const clockIconColor = isCompleted ? 'text-completed-text' : 'text-white';

  return (
    <Card className={`rounded-2xl bg-white border-none py-4 px-2 shadow-[0_4px_10px_rgba(0,0,0,0.05)] h-full flex flex-col`}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 px-2">
        <CardTitle className="text-base font-semibold text-gray-900 leading-snug p-0">
          {task.title}
        </CardTitle>
        <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
      </CardHeader>
      <CardContent className="px-2 flex flex-col flex-1">
        <p className="text-sm font-normal text-description-text mb-4 line-clamp-3 mb-auto"> 
          {task.description}
        </p>
        <div className="flex items-center justify-between mt-4"> 
          <Badge 
            variant="default" 
            className={`font-normal text-xs p-2 h-auto rounded-xl border-none ${dateBadgeClasses}`}
          >
            <Clock className={`w-4 h-4 mr-2 ${clockIconColor}`} />
            {formattedDate}
          </Badge>
          <div className="flex -space-x-3">
            <AvatarPlaceholder />
            <AvatarPlaceholder />
            <AvatarPlaceholder />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TaskCard;