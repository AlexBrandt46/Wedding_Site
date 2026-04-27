import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import React from 'react';
import type TabListProps from '../../types/TabListProps';
import TabBox from './TabBox';
import TabPanels from './TabPanels';

export default function WideTabList(props: TabListProps) {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    props.setValue(newValue);
  };

  return (
    <Box
      sx={{
        top: 0,
        justifyContent: 'center',
        fontFamily: 'Butler !important',
      }}
    >
      <TabContext value={props.value}>
        {/* <img id="usImage" style={{ height: '200px' }} /> */}
        <TabBox handleChange={handleChange} />
        <TabPanels />
      </TabContext>
    </Box>
  );
}
