import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Stat = styled.p`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;

  strong {
    font-weight: bold;
  }
`;

const TopCards = () => {
  return (
    <Card>
      <h3>Token Stats</h3>
      <div>
        <Stat>Total Tokens Available: <strong>1200</strong></Stat>
        <Stat>Tokens Used Today: <strong>340</strong></Stat>
        <Stat>Remaining Tokens: <strong>860</strong></Stat>
      </div>
    </Card>
  );
};

export default TopCards;
