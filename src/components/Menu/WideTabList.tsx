import TabContext from '@mui/lab/TabContext';
import React from 'react';
import TabBox from './TabBox';
import TabPanels from './TabPanels';
import { Toolbar } from '@mui/material';

// TODO: Update this to take in the value and setValue from App.tsx so that the state is lifted up and can be shared between the WideTabList and MobileTabList components. This will allow the selected tab to be consistent across both components when the screen size changes.
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
