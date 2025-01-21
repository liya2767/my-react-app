import React from 'react';
 
type Props = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};
 
const Filter: React.FC<Props> = ({ searchQuery, onSearchChange}) => {
 
  return (
    <div className="flex mb-4">
        <p>Search your Task</p>
      <input
        type="text"
        placeholder="Enter title"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 mr-2 p-2 border rounded"
        required
      />
    </div>
  );
};
 
export default Filter;