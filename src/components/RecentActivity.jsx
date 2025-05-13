// src/components/RecentActivity.jsx
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

const RecentActivity = () => (
  <Section>
    <Title>Recent Activity</Title>
    <Table>
      <thead>
        <tr>
          <Th>Date</Th>
          <Th>Action</Th>
          <Th>Model</Th>
          <Th>Tokens</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>2025-04-04</Td>
          <Td>Used Model</Td>
          <Td>Sentiment Analyzer</Td>
          <Td>-5</Td>
        </tr>
        <tr>
          <Td>2025-04-03</Td>
          <Td>Earned Tokens</Td>
          <Td>Image Classifier</Td>
          <Td>+10</Td>
        </tr>
        <tr>
          <Td>2025-04-02</Td>
          <Td>Uploaded Model</Td>
          <Td>Topic Classifier</Td>
          <Td>+0</Td>
        </tr>
      </tbody>
    </Table>
  </Section>
);

export default RecentActivity;
