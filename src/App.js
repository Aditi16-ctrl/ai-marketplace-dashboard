// src/App.js
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import TokenWallet from './pages/TokenWallet';
import UploadModel from './pages/UploadModel';

const AppWrapper = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 1rem;
  margin-left: 220px; /* width of sidebar */
`;

function App() {
  const [showMarketplace, setShowMarketplace] = useState(false);
  const [showTokenWallet, setShowTokenWallet] = useState(false);
  const [showUploadModel, setShowUploadModel] = useState(false);

  const dashboardRef = useRef(null);
  const marketplaceRef = useRef(null);
  const walletRef = useRef(null);
  const uploadRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShowDashboard = () => {
    scrollToSection(dashboardRef);
  };

  const handleShowMarketplace = () => {
    setShowMarketplace(true);
    setTimeout(() => scrollToSection(marketplaceRef), 100);
  };

  const handleShowWallet = () => {
    setShowTokenWallet(true);
    setTimeout(() => scrollToSection(walletRef), 100);
  };

  const handleShowUploadModel = () => {
    setShowUploadModel(true);
    setTimeout(() => scrollToSection(uploadRef), 100);
  };

  return (
    <AppWrapper>
      <Sidebar
        onDashboardClick={handleShowDashboard}
        onBrowseModelsClick={handleShowMarketplace}
        onTokenWalletClick={handleShowWallet}
        onUploadModelClick={handleShowUploadModel}
      />
      <MainContent>
        <div ref={dashboardRef}>
          <Dashboard />
        </div>
        {showMarketplace && (
          <div ref={marketplaceRef}>
            <Marketplace />
          </div>
        )}
        {showTokenWallet && (
          <div ref={walletRef}>
            <TokenWallet />
          </div>
        )}
        {showUploadModel && (
          <div ref={uploadRef}>
            <UploadModel />
          </div>
        )}
      </MainContent>
    </AppWrapper>
  );
}

export default App;
