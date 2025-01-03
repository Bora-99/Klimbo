import { useCallback, useState } from "react";
import {
  LinkedIssues,
  TaskPriority,
  TaskStatus,
  TaskTypes,
  InitialTask,
} from "../../../constants";
import { editTask, postTask, useAppDispatch } from "../../../store";
import SelectInput from "../../shared/SelectInput";
import { TextArea, Input } from "../../shared";
import { ITaskTypes } from "../../../types";

interface ITaskFormProps {
  editMode?: ITaskTypes;
  setOpen: (value: boolean) => void;
}

export const TaskForm: React.FC<ITaskFormProps> = ({ editMode, setOpen }) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<ITaskTypes>(editMode ?? InitialTask);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editMode) {
      dispatch(editTask(formData));
    } else {
      dispatch(postTask(formData));
    }
    setOpen(false);
  };

  const fieldProps = useCallback(
    (id: keyof ITaskTypes) => {
      return {
        value: formData?.[id],
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
      };
    },
    [formData]
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
              <Input label="Due Date" id="dueDate" type="date" />
            </div>

            <div className="sm:col-span-3">
              <SelectInput
                label="Priority"
                options={TaskPriority}
                {...fieldProps("priority")}
              />
            </div>

            <div className="sm:col-span-3">
              <Input label="Assignee" {...fieldProps("assign")} />
            </div>

            <div className="sm:col-span-3">
              <Input label="Reporter" {...fieldProps("reporter")} />
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
              <TextArea label="Comments" rows={3} {...fieldProps("comments")} />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="attachment"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Attach a file
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
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
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};
