import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes'; // Create this file to define item types if needed


const RoomCanvas = () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.FURNITURE }, // Define the type of item being dragged (ItemTypes should be defined)
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {/* Your room canvas content */}
    </div>
  );
};


export default RoomCanvas;
