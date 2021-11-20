import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

type OnUpload = (content: string) => void;

const FileUploadForm = ({ onUpload }: { onUpload: OnUpload }) => {
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const FormContainer = styled.div`
  background-color: ${props => props.theme.color.mintCream};
  padding: 50px;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
  rgba(0, 0, 0, 0.12) 0px -12px 30px,
  rgba(0, 0, 0, 0.12) 0px 4px 6px,
  rgba(0, 0, 0, 0.17) 0px 12px 13px,
  rgba(0, 0, 0, 0.09) 0px -3px 5px;
  color: ${props => props.theme.color.raisinBlack};
`;

export const FileUpload = ({ onUpload }: { onUpload: OnUpload }) => (
  <Wrapper>
    <FormContainer>
      <h3>Choose a GEDCOM file to visualize:</h3>
      <FileUploadForm onUpload={onUpload} />
    </FormContainer>
  </Wrapper>
);
