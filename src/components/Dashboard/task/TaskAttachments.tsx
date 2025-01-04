import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { IFileAttachment } from "../../../types";

interface AttachmentsSectionProps {
  attachments?: IFileAttachment[];
  addAttachment: ( attachment: IFileAttachment ) => void;
  viewMode?: boolean;
}

export const TaskAttachments: React.FC<AttachmentsSectionProps> = ({
  attachments,
  addAttachment,
  viewMode,
}) => {
  const [newFile, setNewFile] = useState<File | null>(null);
  const { t } = useTranslation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewFile(e.target.files[0]);
    }
  };

  const handleAddFile = () => {
    if (newFile) {
      const newAttachedFile: IFileAttachment = {
        id: uuidv4(),
        filename: newFile.name,
        url: URL.createObjectURL(newFile),
      };
      addAttachment(newAttachedFile);
      setNewFile(null);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">
        {t("attachments")}
      </label>
      <input
        type="file"
        disabled={viewMode}
        onChange={handleFileChange}
        className="w-full px-3 py-2 border rounded"
      />
      <button
        disabled={viewMode}
        type="button"
        onClick={handleAddFile}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {t("addFile")}
      </button>
      <div className="mt-4">
        <ul>
          {attachments?.map((attachment) => (
            <li key={attachment.id}>
              <a
                href={attachment.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {attachment.filename}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

