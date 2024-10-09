import React, { useState, useCallback } from 'react';
import { Page, Card, FormLayout, TextField, Button, DataTable } from '@shopify/polaris';

const SizeGuideEditor: React.FC = () => {
  const [guideName, setGuideName] = useState('');
  const [sizes, setSizes] = useState([['', '', '', '']]);

  const handleGuideNameChange = useCallback((value) => setGuideName(value), []);

  const handleSizeChange = useCallback((value, rowIndex, columnIndex) => {
    setSizes(prevSizes => {
      const newSizes = [...prevSizes];
      newSizes[rowIndex] = [...newSizes[rowIndex]];
      newSizes[rowIndex][columnIndex] = value;
      return newSizes;
    });
  }, []);

  const addSize = useCallback(() => {
    setSizes(prevSizes => [...prevSizes, ['', '', '', '']]);
  }, []);

  return (
    <Page title="Size Guide Editor">
      <Card sectioned>
        <FormLayout>
          <TextField
            label="Guide Name"
            value={guideName}
            onChange={handleGuideNameChange}
          />
          <DataTable
            columnContentTypes={['text', 'text', 'text', 'text']}
            headings={['Standard Size', 'US Size', 'UK Size', 'EU Size']}
            rows={sizes.map((size, rowIndex) =>
              size.map((value, columnIndex) => (
                <TextField
                  value={value}
                  onChange={(newValue) => handleSizeChange(newValue, rowIndex, columnIndex)}
                />
              ))
            )}
          />
          <Button onClick={addSize}>Add Size</Button>
          <Button primary>Save Size Guide</Button>
        </FormLayout>
      </Card>
    </Page>
  );
};

export default SizeGuideEditor;