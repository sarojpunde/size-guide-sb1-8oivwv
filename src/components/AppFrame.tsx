import React from 'react';
import { Frame, Navigation } from '@shopify/polaris';
import { HomeMinor, RulerMajor, InventoryMajor } from '@shopify/polaris-icons';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import SizeGuideEditor from './SizeGuideEditor';
import MarketplaceMappings from './MarketplaceMappings';

const AppFrame: React.FC = () => {
  const navigate = useNavigate();

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: 'Dashboard',
            icon: HomeMinor,
            onClick: () => navigate('/'),
          },
          {
            label: 'Size Guide Editor',
            icon: RulerMajor,
            onClick: () => navigate('/editor'),
          },
          {
            label: 'Marketplace Mappings',
            icon: InventoryMajor,
            onClick: () => navigate('/marketplace'),
          },
        ]}
      />
    </Navigation>
  );

  return (
    <Frame navigation={navigationMarkup}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/editor" element={<SizeGuideEditor />} />
        <Route path="/marketplace" element={<MarketplaceMappings />} />
      </Routes>
    </Frame>
  );
};

export default AppFrame;