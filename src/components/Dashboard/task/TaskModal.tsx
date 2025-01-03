import { TaskForm } from "./TaskForm";
import { Modal } from "../../shared";
import { ITaskTypes } from "../../../types";

interface ModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  editMode?: ITaskTypes;
}

export const TaskModal: React.FC<ModalProps> = ({
  open,
  setOpen,
  editMode,
}) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={editMode ? "Edit Task" : "Create Task"}
    >
      <TaskForm editMode={editMode} setOpen={setOpen} />
    </Modal>
  );
};
