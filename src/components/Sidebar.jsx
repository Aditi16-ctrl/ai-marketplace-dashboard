// src/components/Sidebar.jsx
import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 220px;
  background-color: #fff;
  padding: 2rem 1.5rem;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.05);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2rem;
`;

const NavItem = styled.div`
  margin-bottom: 1.2rem;
  font-size: 1rem;
  color: #111827;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #4f46e5;
  }
`;

const Sidebar = ({ 
  onDashboardClick, 
  onBrowseModelsClick, 
  onTokenWalletClick, 
  onUploadModelClick 
}) => (
  <SidebarWrapper>
    <Title>AI Marketplace</Title>
    <NavItem onClick={onDashboardClick}>Dashboard</NavItem>
    <NavItem onClick={onBrowseModelsClick}>Browse Models</NavItem>
    <NavItem onClick={onUploadModelClick}>Upload Model</NavItem>
    <NavItem onClick={onTokenWalletClick}>Token Wallet</NavItem>
    <NavItem>Analytics</NavItem>
  </SidebarWrapper>
);

export default Sidebar;
