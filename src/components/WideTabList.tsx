import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import EventInfo from './EventInfo';
import Main from './Main/Main';
import OurStory from './OurStory';
import PhotoGallery from './Photos/PhotoGallery';
import RsvpForm from './RsvpForm';

export default function WideTabList({ onTabChange: (React.SyntheticEvent, any) => void)}) {
  return (
    <Box
      sx={{
        top: 0,
        justifyContent: 'center',
        fontFamily: 'Butler !important',
      }}
    >
      <TabContext value={value}>
        {/* <img id="usImage" style={{ height: '200px' }} /> */}
        <Box
          className="siteBox"
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            flexGrow: 1,
            justifyContent: 'center',
            backgroundColor: 'var(--blue)',
            display: { xs: 'flex', s: 'flex', md: 'flex' },
          }}
        >
          <TabList id="tabList" onChange={onTabChange}>
            <Tab label="Main" value="1" sx={{ fontFamily: 'Butler', wordWrap: 'break-word' }} />
            <Tab label="Our Story" value="2" sx={{ fontFamily: 'Butler' }} />
            <Tab
              label="Event Info"
              value="3"
              sx={{ fontFamily: 'Butler', wordWrap: 'break-word' }}
            />
            <Tab label="RSVP" value="4" sx={{ fontFamily: 'Butler' }} />
            <Tab label="Photos" value="5" sx={{ fontFamily: 'Butler' }} />
          </TabList>
        </Box>
        <TabPanel value="1" className="pagePanel">
          <Main />
        </TabPanel>
        <TabPanel value="2" className="pagePanel">
          <OurStory />
        </TabPanel>
        <TabPanel value="3" className="pagePanel">
          <EventInfo />
        </TabPanel>
        <TabPanel value="4" className="pagePanel">
          <RsvpForm />
        </TabPanel>
        <TabPanel value="5" className="pagePanel">
          <PhotoGallery />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
