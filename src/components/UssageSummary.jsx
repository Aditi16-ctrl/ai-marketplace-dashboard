// src/components/UsageSummary.jsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f9fafb;
`;

const Th = styled.th`
  text-align: left;
  font-weight: 600;
  padding: 0.75rem 1rem;
  background-color: #f3f4f6;
`;

const Td = styled.td`
  padding: 0.75rem 1rem;
  border-top: 1px solid #e5e7eb;
`;

const UsageSummary = () => (
  <Section>
    <Title>Usage Summary</Title>
    <Table>
      <thead>
        <tr>
          <Th>Model Name</Th>
          <Th>Type</Th>
          <Th>Usage Count</Th>
          <Th>Tokens Spent</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>Sentiment Analyzer</Td>
          <Td>NLP</Td>
          <Td>45</Td>
          <Td>225</Td>
        </tr>
        <tr>
          <Td>Image Classifier</Td>
          <Td>CV</Td>
          <Td>30</Td>
          <Td>300</Td>
        </tr>
      </tbody>
    </Table>
  </Section>
);

export default UsageSummary;
