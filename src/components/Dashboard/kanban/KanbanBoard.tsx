import { DragDropContext } from "@hello-pangea/dnd";
import { KanbanColumn } from "./KanbanColumn";
import { useKanbanBoard } from "../../../hooks";

export const KanbanBoard: React.FC = () => {
  const { columns, handleOnDragEnd } = useKanbanBoard();

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="flex justify-center gap-4">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            id={column.id}
            title={column.title}
            items={column.items}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
