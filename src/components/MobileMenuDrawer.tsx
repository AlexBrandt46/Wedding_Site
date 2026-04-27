import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { MENU_TABS } from '../types/MenuTabs';
import EventInfo from './EventInfo';
import Main from './Main/Main';
import OurStory from './OurStory';
import PhotoGallery from './Photos/PhotoGallery';
import RsvpForm from './RsvpForm';

const drawerWidth = 100;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        background: 'var(--blue) !important',
      },
    },
  ],
  color: 'var(--text-color) !important',
}));

export default function MobileTabList({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const currentTabLabel = MENU_TABS[value as keyof typeof MENU_TABS] || 'Menu';

  return (
    <TabContext value={value}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          flexGrow: 1,
          justifyContent: 'center',
          backgroundColor: 'var(--blue)',
          display: 'flex',
        }}
      >
        <AppBar
          position="fixed"
          open={open}
          sx={{
            background: 'var(--blue) !important',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  mr: 2,
                },
                open && { display: 'none' },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {currentTabLabel}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              borderRight: '1px solid var(--text-color) !important',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader
            sx={{
              background: 'var(--blue) !important',
            }}
          >
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon sx={{ color: 'var(--text-color) !important' }} />
            </IconButton>
          </DrawerHeader>
          <Divider
            sx={{
              background: 'var(--text-color) !important',
            }}
          />
          <Box
            className="siteBox"
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              flexGrow: 1,
              justifyContent: 'end',
              backgroundColor: 'var(--blue)',
              display: 'flex',
            }}
          >
            <TabList id="tabList" onChange={handleChange} orientation="vertical">
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
        </Drawer>
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
  );
}
