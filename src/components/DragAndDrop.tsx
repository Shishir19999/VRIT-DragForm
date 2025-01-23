import React from 'react';

export const DragItem: React.FC<{ label: string; component: string }> = ({ label, component }) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('component', JSON.stringify({ label, component }));
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        cursor: 'move',
      }}
    >
      {label}
    </div>
  );
};
