export interface TaskTypes {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  assign: string;
  reporter: string;
  type: "Feature" | "Bug" | "Research";
  comments: string;
  attachment: string;
  status: "Not Started" | "In Progress" | "Completed" | "Blocked";
}