import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ITaskTypes } from "../../../types";
import { TaskModal } from "./TaskModal";
import { Input, Modal } from "../../shared";
import { useTaskTable } from "../../../hooks";

interface TaskTableProps {
  tasks: ITaskTypes[];
}

export const TaskTable: React.FC<TaskTableProps> = ({ tasks }) => {
  const {
    columns,
    setQuery,
    filteredTasks,
    open,
    setOpen,
    handleDelete,
    editTask,
    setEditTask,
    openDeleteModal,
    setOpenDeleteModal,
  } = useTaskTable(tasks);

  return (
    <div className="overflow-x-auto px-4 py-6">
      <Input
        placeholder="Search Task..."
        className="mb-4 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
        onChange={(e) => setQuery(e.target.value)}
        id={"search"}
      />
      <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-4 py-2 text-left font-semibold text-sm text-gray-600"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        {tasks.length > 0 ? (
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id} className="border-t border-gray-200">
                <td className="px-4 py-2 text-gray-700 overflow-hidden text-ellipsis whitespace-normal max-w-72">
                  {task.title}
                </td>
                <td className="px-4 py-2 text-gray-700">
                  {new Date(task.dueDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-gray-700">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      task.priority === "High"
                        ? "bg-red-200 text-red-800"
                        : task.priority === "Medium"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-700">{task.assign}</td>
                <td className="px-4 py-2 text-gray-700">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      task.status === "In Progress"
                        ? "bg-blue-200 text-blue-800"
                        : task.status === "Done"
                        ? "bg-green-200 text-green-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-700 space-x-3">
                  <button
                    onClick={() => {
                      setEditTask(task);
                      setOpenDeleteModal(true);
                    }}
                    className="h-6 w-6 text-red-500"
                  >
                    <TrashIcon />
                  </button>
                  <button
                    onClick={() => {
                      setEditTask(task);
                      setOpen(true);
                    }}
                    className="h-6 w-6 text-blue-500"
                  >
                    <PencilIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <h3 className="font-medium text-lg p-4">There is no task</h3>
        )}
      </table>

      <TaskModal open={open} setOpen={setOpen} editMode={editTask} />

      <Modal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        title={"Delete Task"}
      >
        <>
          <p>Are you shore you want to delete this task?</p>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
              onClick={() => setOpenDeleteModal(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleDelete(editTask?.id || "")}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </>
      </Modal>
    </div>
  );
};
