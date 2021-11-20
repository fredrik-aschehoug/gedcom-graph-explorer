import React, { ChangeEvent, FormEvent, useState } from 'react';

type OnUpload = (content: string) => void;

export const FileUpload = ({ onUpload }: { onUpload: OnUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 1) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = await file?.text();

    if (content) {
      onUpload(content);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="file" onChange={onChange} />
      <button type="submit">Upload</button>
    </form>
  );
};
