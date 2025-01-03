import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { TaskCard } from "../task";
import { ITaskTypes } from "../../../types";

interface IKanbanItemProps {
  id: string;
  item: ITaskTypes;
  index: number;
}

export const KanbanItem: React.FC<IKanbanItemProps> = ({ id, index, item }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            marginBottom: "8px",
            borderRadius: "8px",
          }}
        >
          <TaskCard item={item} />
        </div>
      )}
    </Draggable>
  );
};
