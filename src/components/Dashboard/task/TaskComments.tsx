import React from "react";
import { MentionsInput, Mention } from "react-mentions";
import { useTranslation } from "react-i18next";
import { ICommentsType, IUserTypes } from "../../../types";
import { useAddComment } from "../../../hooks";

interface TaskCommentsProps {
  comments?: ICommentsType[];
  addNewComments: (comment: ICommentsType) => void;
  users: IUserTypes[];
}

export const TaskComments: React.FC<TaskCommentsProps> = ({
  comments,
  addNewComments,
  users,
}) => {
  const { newComment, handleCommentChange, handleAddComment } =
    useAddComment(addNewComments);
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <label className="block text-gray-700">{t("comments")}</label>
      <MentionsInput
        value={newComment}
        onChange={handleCommentChange}
        className="w-full px-3 py-2 border rounded"
      >
        <Mention
          trigger="@"
          data={users.map((user) => ({
            id: user.username,
            display: user.username,
          }))}
        />
      </MentionsInput>
      <button
        type="button"
        onClick={handleAddComment}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {t("addComment")}
      </button>
      <div className="mt-4">
        <label className="block text-gray-700">{t("existingComments")}</label>
        <ul>
          {comments?.map((comment, index) => (
            <li key={index} className="mb-2">
              <strong>{comment.author}</strong>: {comment.text} <br />
              <small>{new Date(comment.date).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
