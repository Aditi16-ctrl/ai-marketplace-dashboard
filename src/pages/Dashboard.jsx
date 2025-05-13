// src/pages/Dashboard.jsx
import React from 'react';
import styled from 'styled-components';
import UsageSummary from '../components/UssageSummary';
import RecentActivity from '../components/RecentActivity';

const DashboardWrapper = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f1f5f9;
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const TokenSummary = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Label = styled.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`;

const Value = styled.div`
  font-weight: bold;
  color: #0284c7;
  font-size: 1.2rem;
  transition: color 0.3s ease;
`;

const TokenCard = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0284c7;

    ${Label}, ${Value} {
      color: #ffffff;
    }
  }
`;

const Dashboard = () => (
  <DashboardWrapper>
    <Header>Dashboard</Header>

    <TokenSummary>
      <TokenCard>
        <Label>Token Balance</Label>
        <Value>100 Tokens</Value>
      </TokenCard>
      <TokenCard>
        <Label>Tokens Earned</Label>
        <Value>250</Value>
      </TokenCard>
      <TokenCard>
        <Label>Tokens Spent</Label>
        <Value>150</Value>
      </TokenCard>
      <TokenCard>
        <Label>Most Used Model</Label>
        <Value>Sentiment Analyzer</Value>
      </TokenCard>
    </TokenSummary>

    <UsageSummary />
    <RecentActivity />
  </DashboardWrapper>
);

export default Dashboard;
