import { useState } from "react";
import { ICommentsType } from "../../types";

export const useAddComment = (
  addNewComments: (comment: ICommentsType) => void
) => {
  const currentUser = JSON.parse(sessionStorage.getItem("user") || "{}");
  const [newComment, setNewComment] = useState<string>("");

  const handleCommentChange = (_: any, newValue: string) => {
    setNewComment(newValue);
  };

  const handleAddComment = () => {
    if (newComment.trim() && currentUser) {
      const newCommentObj: ICommentsType = {
        author: currentUser.username,
        text: newComment,
        date: new Date().toISOString(),
      };
      addNewComments(newCommentObj);
      setNewComment("");
    }
  };

  return {
    newComment,
    handleCommentChange,
    handleAddComment,
  };
};
