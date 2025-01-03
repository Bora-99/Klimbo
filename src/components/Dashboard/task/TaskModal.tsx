import { TaskForm } from "./TaskForm";
import { Modal } from "../../shared";
import { ITaskTypes } from "../../../types";

interface ModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  editMode?: ITaskTypes;
  viewMode?: boolean;
}

export const TaskModal: React.FC<ModalProps> = ({
  open,
  setOpen,
  editMode,
  viewMode,
}) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={viewMode ? "Task Details" : editMode ? "Edit Task" : "Create Task"}
    >
      <TaskForm editMode={editMode} setOpen={setOpen} viewMode={viewMode} />
    </Modal>
  );
};
