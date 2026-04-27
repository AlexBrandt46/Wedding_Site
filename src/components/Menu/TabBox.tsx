import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { MENU_TABS } from '../../types/MenuTabs';

interface TabBoxProps {
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
  orientation?: 'horizontal' | 'vertical' | undefined;
}

export default function TabBox({ handleChange, orientation }: TabBoxProps) {
  return (
    <Box
      className="siteBox"
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: 'var(--blue)',
        display: 'flex',
      }}
    >
      <TabList id="tabList" onChange={handleChange} orientation={orientation ?? 'horizontal'}>
        {Object.entries(MENU_TABS).map(([value, label]) => (
          <Tab
            key={value}
            label={label}
            value={value}
            sx={{ fontFamily: 'Butler', wordWrap: 'break-word' }}
          />
        ))}
      </TabList>
    </Box>
  );
}
