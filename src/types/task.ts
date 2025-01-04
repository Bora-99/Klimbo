export interface ITaskTypes {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  assign: string;
  reporter: string;
  type: "Feature" | "Bug" | "Research";
  comments?: ICommentsType[];
  attachments?: IFileAttachment[];
  status: "To Do" | "In Progress" | "In Review" | "Done";
  linkedIssues: "Blocks" | "Is Blocked By" | "Relates To";
}

export interface ICommentsType {
  text: string;
  author: string;
  date: string;
}

export interface IFileAttachment {
  id: string;
  url: string;
  filename: string;
}
