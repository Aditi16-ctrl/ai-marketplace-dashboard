// src/pages/UploadModel.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const UploadWrapper = styled.div`
  background-color: #f9fafb;
  padding: 2rem;
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  max-width: 600px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #374151;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`;

const UploadModel = () => {
  const [modelName, setModelName] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: handle model upload logic
    alert(`Model "${modelName}" uploaded!`);
  };

  return (
    <UploadWrapper>
      <Header>Upload AI Model</Header>
      <Form onSubmit={handleSubmit}>
        <Label>Model Name</Label>
        <Input
          type="text"
          placeholder="Enter model name"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
          required
        />
        <Label>Model File</Label>
        <Input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <Button type="submit">Upload</Button>
      </Form>
    </UploadWrapper>
  );
};

export default UploadModel;
