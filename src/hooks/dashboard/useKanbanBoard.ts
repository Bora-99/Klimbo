import { DropResult } from "@hello-pangea/dnd";
import { useMemo } from "react";
import {
  useAppSelector,
  RootState,
  useAppDispatch,
} from "../../store";

export const useKanbanBoard = () => {
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);

  const dispatch = useAppDispatch();

  const columns = useMemo(
    () => [
      {
        id: "column-1",
        title: "To Do",
        items: tasks.filter((task) => task.status === "To Do"),
      },
      {
        id: "column-2",
        title: "In Progress",
        items: tasks.filter((task) => task.status === "In Progress"),
      },
      {
        id: "column-3",
        title: "In Review",
        items: tasks.filter((task) => task.status === "In Review"),
      },
      {
        id: "column-4",
        title: "Done",
        items: tasks.filter((task) => task.status === "Done"),
      },
    ],
    [tasks]
  );

  const handleOnDragEnd = (result: DropResult<string>) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = columns.find((col) => col.id === source.droppableId);
    const destinationColumn = columns.find(
      (col) => col.id === destination.droppableId
    );

    if (!sourceColumn || !destinationColumn) return;

    const [draggedItem] = sourceColumn.items.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceColumn.items.splice(destination.index, 0, draggedItem);
    } else {
      destinationColumn.items.splice(destination.index, 0, draggedItem);
    }

    // dispatch(updateStatus(columns));
  };

  return {
    columns,
    handleOnDragEnd,
  };
};
