import TabContext from '@mui/lab/TabContext';
import React from 'react';
import TabBox from './TabBox';
import TabPanels from './TabPanels';
import { Toolbar } from '@mui/material';

export default function WideTabList() {
  const [value, setValue] = React.useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Toolbar
      sx={{
        top: 0,
        justifyContent: 'center',
        fontFamily: 'Butler !important',
      }}
    >
      <TabContext value={value}>
        {/* <img id="usImage" style={{ height: '200px' }} /> */}
        <TabBox handleChange={handleChange} />
        <TabPanels />
      </TabContext>
    </Toolbar>
  );
}
