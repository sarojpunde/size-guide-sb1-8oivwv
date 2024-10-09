import React, { useState, useCallback } from 'react';
import { Page, Card, FormLayout, TextField, Button, DataTable } from '@shopify/polaris';

const MarketplaceMappings: React.FC = () => {
  const [mappings, setMappings] = useState([['', '', '']]);

  const handleMappingChange = useCallback((value, rowIndex, columnIndex) => {
    setMappings(prevMappings => {
      const newMappings = [...prevMappings];
      newMappings[rowIndex] = [...newMappings[rowIndex]];
      newMappings[rowIndex][columnIndex] = value;
      return newMappings;
    });
  }, []);

  const addMapping = useCallback(() => {
    setMappings(prevMappings => [...prevMappings, ['', '', '']]);
  }, []);

  return (
    <Page title="Marketplace Size Mappings">
      <Card sectioned>
        <FormLayout>
          <DataTable
            columnContentTypes={['text', 'text', 'text']}
            headings={['Vendor', 'Vendor Size', 'Standard Size']}
            rows={mappings.map((mapping, rowIndex) =>
              mapping.map((value, columnIndex) => (
                <TextField
                  value={value}
                  onChange={(newValue) => handleMappingChange(newValue, rowIndex, columnIndex)}
                />
              ))
            )}
          />
          <Button onClick={addMapping}>Add Mapping</Button>
          <Button primary>Save Mappings</Button>
        </FormLayout>
      </Card>
    </Page>
  );
};

export default MarketplaceMappings;