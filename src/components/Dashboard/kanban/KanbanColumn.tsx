import React from "react";
import { KanbanItem } from "./KanbanItem";
import { Droppable } from "@hello-pangea/dnd";
import { ITaskTypes } from "../../../types";

interface ColumnProps {
  id: string;
  title: string;
  items: ITaskTypes[];
}

export const KanbanColumn: React.FC<ColumnProps> = ({ id, title, items }) => {
  return (
    <Droppable droppableId={id} direction="vertical">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-gray-100 p-4 rounded-lg min-w-64 min-h-[600px]"
        >
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
          {items.map((item, index) => (
            <KanbanItem
              key={item.id}
              id={item.id.toString()}
              index={index}
              item={item}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
