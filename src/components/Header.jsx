import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #4f46e5;
  text-align: left;
  cursor: pointer;
  user-select: none;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 1rem;
  margin-top: 0.5rem;
  z-index: 999;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-10px)')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
`;

const DropdownMenu = styled.ul`
  background-color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  list-style: none;
  padding: 0.5rem 0;
  border-radius: 6px;
  width: 200px;
`;

const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggle = () => setShowDropdown(prev => !prev);

  return (
    <HeaderWrapper>
      <Title onClick={handleToggle}>AI Marketplace ☰</Title>
      <DropdownWrapper show={showDropdown}>
        <DropdownMenu>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Browse Models</DropdownItem>
          <DropdownItem>Upload Model</DropdownItem>
          <DropdownItem>Token Wallet</DropdownItem>
          <DropdownItem>Analytics</DropdownItem>
        </DropdownMenu>
      </DropdownWrapper>
    </HeaderWrapper>
  );
};

export default Header;
