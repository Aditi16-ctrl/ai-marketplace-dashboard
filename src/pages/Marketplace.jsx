import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 1rem 2rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Title = styled.h3`
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const Credits = styled.p`
  font-weight: 500;
  color: #2d6cdf;
`;

const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const TryButton = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  cursor: pointer;
`;

const ViewButton = styled.button`
  background-color: #e5e7eb;
  color: black;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  cursor: pointer;
`;

const models = [
  {
    name: "Text Generation",
    desc: "Generates text based on input prompts",
    cost: "20 credits per call"
  },
  {
    name: "Image Classification",
    desc: "Classifies images into categories",
    cost: "Free"
  },
  {
    name: "Sentiment Analysis",
    desc: "Analyzes sentiment of text data",
    cost: "10 credits per call"
  },
  {
    name: "Object Detection",
    desc: "Detects objects within images",
    cost: "Free trial\nPricing: 30 credits per call"
  }
];

const Marketplace = () => {
  return (
    <PageWrapper>
      <Heading>Marketplace</Heading>
      <Grid>
        {models.map((model, index) => (
          <Card key={index}>
            <Title>{model.name}</Title>
            <Description>{model.desc}</Description>
            <Credits>{model.cost}</Credits>
            <ButtonGroup>
              <TryButton>Try</TryButton>
              <ViewButton>View</ViewButton>
            </ButtonGroup>
          </Card>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default Marketplace;
