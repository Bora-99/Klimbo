import { ITaskTypes } from "../types";
import { v4 as uuidv4 } from "uuid";

export const TaskPriority = [
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
];
export const TaskTypes = [
  { label: "Feature", value: "Feature" },
  { label: "Bug", value: "Bug" },
  { label: "Research", value: "Research" },
];
export const TaskStatus = [
  { label: "To Do", value: "To Do" },
  { label: "In Progress", value: "In Progress" },
  { label: "In Review", value: "In Review" },
  { label: "Done", value: "Done" },
];

export const LinkedIssues = [
  { label: "Blocks", value: "Blocks" },
  { label: "Is Blocked By", value: "Is Blocked By" },
  { label: "Relates To", value: "Relates To" },
];

export const LanguageOptions = [
  { label: "English", value: "en" },
  { label: "Albanian", value: "sq" },
];

export const tabletBreakpoint = 1300;

export const InitialTask: ITaskTypes = {
  id: "",
  title: "",
  description: "",
  dueDate: "",
  priority: "Low",
  assign: "",
  reporter: "",
  type: "Feature",
  status: "To Do",
  linkedIssues: "Relates To",
};
