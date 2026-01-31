import "./App.css";
import { Box, createTheme, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import EventInfo from "./components/EventInfo";
import OurStory from "./components/OurStory";
import Main from "./components/Main";
import RsvpForm from "./components/RsvpForm";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const theme = createTheme({
    typography: {
      fontFamily: "Butler",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Butler';
            font-style: bold;
            font-display: swap;
            font-weight: 400;
            src: local("Butler-Bold"), url("./assets/fonts/serif/Butler-Bold.woff2") format();
          }
        `,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "50vw",
          top: 0,
          justifyContent: "center",
          fontFamily: "Butler !important",
        }}
      >
        <TabContext value={value}>
          <img id="usImage" style={{ height: "200px" }} />
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              flexGrow: 1,
              justifyContent: "center",
              backgroundColor: "var(--blue)",
              display: { xs: "none", md: "flex" },
            }}
          >
            <TabList onChange={handleChange}>
              <Tab label="Main" value="1" sx={{ fontFamily: "Butler" }} />
              <Tab label="Our Story" value="2" sx={{ fontFamily: "Butler" }} />
              <Tab label="Event Info" value="3" sx={{ fontFamily: "Butler" }} />
              <Tab label="RSVP" value="4" sx={{ fontFamily: "Butler" }} />
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
        </TabContext>
      </Box>
    </ThemeProvider>
  );
}

export default App;
