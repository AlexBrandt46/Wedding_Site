import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

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
        <Tab label="Main" value="1" sx={{ fontFamily: 'Butler', wordWrap: 'break-word' }} />
        <Tab label="Our Story" value="2" sx={{ fontFamily: 'Butler' }} />
        <Tab label="Event Info" value="3" sx={{ fontFamily: 'Butler', wordWrap: 'break-word' }} />
        <Tab label="RSVP" value="4" sx={{ fontFamily: 'Butler' }} />
        <Tab label="Photos" value="5" sx={{ fontFamily: 'Butler' }} />
      </TabList>
    </Box>
  );
}
