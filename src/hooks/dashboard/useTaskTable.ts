import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, deleteTask } from "../../store";
import { ITaskTypes } from "../../types";

export const useTaskTable = (tasks: ITaskTypes[]) => {
  const { t } = useTranslation();

  const [query, setQuery] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [editTask, setEditTask] = useState<ITaskTypes | undefined>(undefined);

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) =>
        ["title", "priority", "assign", "status"].some((key) =>
          task[key as keyof ITaskTypes]
            ?.toString()
            .toLowerCase()
            .includes(query.toLowerCase())
        )
      ),
    [tasks, query]
  );

  const columns = useMemo(
    () => [
      t("title"),
      t("dueDate"),
      t("priority"),
      t("assignee"),
      t("status"),
      t("actions"),
    ],
    [t]
  );
  const dispatch = useAppDispatch();

  const handleDelete = (taskId: string) => {
    dispatch(deleteTask(taskId));
    setOpenDeleteModal(false);
  };

  return {
    query,
    setQuery,
    open,
    setOpen,
    openDeleteModal,
    setOpenDeleteModal,
    editTask,
    setEditTask,
    filteredTasks,
    columns,
    handleDelete,
  };
};
