import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import TabContext from '@mui/lab/TabContext';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { MENU_TABS } from '../../types/MenuTabs';
import TabPanels from './TabPanels';
import TabBox from './TabBox';
import { Icon } from '@mui/material';

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
        width: `100%`,
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

// TODO: Create a TabListProps interface and type the props for this component and WideTabList with it
export default function MobileTabList({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [toolbarHeader, setToolbarHeader] = React.useState('A & B');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setOpen(false);
    setToolbarHeader(
      MENU_TABS[newValue as keyof typeof MENU_TABS] !== 'Main'
        ? MENU_TABS[newValue as keyof typeof MENU_TABS]
        : 'A & B'
    );
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[open && { display: 'none' }]}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ justifySelf: 'center' }}>
              {toolbarHeader}
            </Typography>
            <IconButton disabled>
              <Icon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: '100%',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '100%',
              boxSizing: 'border-box',
              borderRight: 'none',
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
          <TabBox handleChange={handleChange} orientation="vertical" />
        </Drawer>
      </Box>
      <TabPanels />
    </TabContext>
  );
}
