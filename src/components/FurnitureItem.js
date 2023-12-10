import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes'; // Create this file to define item types if needed


const FurnitureItem = ({ name, image }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.FURNITURE, name, image }, // Pass necessary data for the dragged item
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {/* Your furniture item content */}
    </div>
  );
};


export default FurnitureItem;
