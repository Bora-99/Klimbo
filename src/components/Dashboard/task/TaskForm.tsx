import { useCallback, useState } from "react";
import {
  LinkedIssues,
  TaskPriority,
  TaskStatus,
  TaskTypes,
  InitialTask,
} from "../../../constants";
import {
  editTask,
  postTask,
  useAppDispatch,
  useAppSelector,
} from "../../../store";
import { TextArea, Input, SelectInput } from "../../shared";
import { ICommentsType, IFileAttachment, ITaskTypes } from "../../../types";
import { TaskComments } from "./TaskComments";
import { TaskAttachments } from "./TaskAttachments";
import { v4 as uuidv4 } from "uuid";

interface ITaskFormProps {
  editMode?: ITaskTypes;
  setOpen: (value: boolean) => void;
  viewMode?: boolean;
}

export const TaskForm: React.FC<ITaskFormProps> = ({
  editMode,
  setOpen,
  viewMode,
}) => {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users.users);

  const userOptions = users.map((user) => ({
    label: user.username,
    value: user.username,
  }));

  const [formData, setFormData] = useState<ITaskTypes>(editMode ?? InitialTask);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const taskData = {
      ...formData,
      id: formData?.id || uuidv4(),
      assign: formData?.assign || users[0].username,
      reporter: formData?.reporter || users[0].username,
    };
    if (editMode) {
      dispatch(editTask(taskData));
    } else {
      dispatch(postTask(taskData));
    }
    setOpen(false);
  };

  const addNewComments = (comment: ICommentsType) => {
    setFormData((prev) => ({
      ...prev,
      comments: [...(prev.comments || []), comment],
    }));
  };

  const addNewAttachment = (attachment: IFileAttachment) => {
    setFormData((prev) => ({
      ...prev,
      attachments: [...(prev.attachments || []), attachment],
    }));
  };

  const fieldProps = useCallback(
    (id: keyof ITaskTypes) => {
      return {
        value: typeof formData?.[id] === "object" ? "" : formData?.[id],
        onChange: (
          e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
          >
        ) => {
          setFormData((prev) => ({
            ...prev,
            [id]: e.target.value || "",
          }));
        },
        id: id,
        required: typeof formData?.[id] === "object" ? false : !formData?.[id],
        disabled: viewMode,
      };
    },
    [formData, viewMode]
  );

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <Input label="Task Name" {...fieldProps("title")} />
            </div>

            <div className="col-span-full">
              <TextArea
                label="Task Description"
                rows={3}
                {...fieldProps("description")}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                label="Due Date"
                type="date"
                min={new Date().toJSON().slice(0, 10)}
                {...fieldProps("dueDate")}
              />
            </div>

            <div className="sm:col-span-3">
              <SelectInput
                label="Priority"
                options={TaskPriority}
                {...fieldProps("priority")}
              />
            </div>

            <div className="sm:col-span-3">
              <SelectInput
                label="Assignee"
                options={userOptions}
                {...fieldProps("assign")}
              />
            </div>

            <div className="sm:col-span-3">
              <SelectInput
                label="Reporter"
                options={userOptions}
                {...fieldProps("reporter")}
              />
            </div>

            <div className="sm:col-span-3">
              <SelectInput
                label="Type"
                options={TaskTypes}
                {...fieldProps("type")}
              />
            </div>
            <div className="sm:col-span-3">
              <SelectInput
                label="Status"
                options={TaskStatus}
                {...fieldProps("status")}
              />
            </div>
            <div className="sm:col-span-3">
              <SelectInput
                label="Linked Issues"
                options={LinkedIssues}
                {...fieldProps("linkedIssues")}
              />
            </div>

            <div className="col-span-full">
              <TaskComments
                comments={formData?.comments}
                addNewComments={addNewComments}
                users={users}
                viewMode={viewMode}
              />
            </div>
            <div className="col-span-full">
              <TaskAttachments
                attachments={formData?.attachments}
                addAttachment={addNewAttachment}
                viewMode={viewMode}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm/6 font-semibold text-gray-900"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
        {!viewMode && (
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        )}
      </div>
    </form>
  );
};
