import React from 'react';
 
type Props = {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
};
 
const TaskCard: React.FC<Props> = ({title,description,status,priority}) => {
  return (
    <div className="border rounded shadow-md mb-4">
        <p>Task lists</p>
      <h3 className="text-lg font-bold">Title :{title}</h3>
      <h6>Description: {description}</h6>
      <h6>Status: {status}</h6>
      <h6>Priority: {priority}</h6>
    </div>
  );
};
 
 
export default TaskCard;