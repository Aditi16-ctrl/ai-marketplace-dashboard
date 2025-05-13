// src/pages/TokenWallet.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WalletWrapper = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  margin-top: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const WalletInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  background-color: #f3f4f6;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const TokenCard = styled.div`
  flex: 1;
  margin: 0 1rem;
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
`;

const Label = styled.div`
  font-size: 0.95rem;
  color: #6b7280;
`;

const Value = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 0.5rem;
`;

const TokenWallet = () => {
  return (
    <WalletWrapper>
      <Title>Token Wallet</Title>
      <WalletInfo>
        <TokenCard>
          <Label>Total Tokens</Label>
          <Value>1,200</Value>
        </TokenCard>
        <TokenCard>
          <Label>Used Tokens</Label>
          <Value>350</Value>
        </TokenCard>
        <TokenCard>
          <Label>Remaining Tokens</Label>
          <Value>850</Value>
        </TokenCard>
      </WalletInfo>
    </WalletWrapper>
  );
};

export default TokenWallet;
