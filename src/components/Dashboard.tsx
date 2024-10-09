import React from 'react';
import { Page, Layout, Card, Button } from '@shopify/polaris';

const Dashboard: React.FC = () => {
  return (
    <Page title="Dashboard">
      <Layout>
        <Layout.Section oneHalf>
          <Card title="Quick Actions" sectioned>
            <Button primary>Create New Size Guide</Button>
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Card title="Recent Size Guides" sectioned>
            <p>Women's Clothing Size Guide</p>
            <p>Men's Shoe Size Guide</p>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Dashboard;