import "./App.css";
import { AppBar, Box, Tab, Toolbar } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import EventInfo from "./components/EventInfo";
import OurStory from "./components/OurStory";
import Main from "./components/Main";
import RsvpForm from "./components/RsvpForm";

function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", top: 0 }}>
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
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Main" value="1" />
              <Tab label="Our Story" value="2" />
              <Tab label="Event Info" value="3" />
              <Tab label="RSVP" value="4" />
            </TabList>
          </Box><TabPanel value="1">
            <Main />
          </TabPanel>
          <TabPanel value="2">
            <OurStory />
          </TabPanel>
          <TabPanel value="3" className="pagePanel" >
            <EventInfo />
          </TabPanel>
          <TabPanel value="4" className="pagePanel" >
            <RsvpForm />
          </TabPanel>
        </TabContext>
      </Box>

      {/* <AppBar>
          <Toolbar
            sx={{
              backgroundColor: "var(--blue)",
              padding: 0,
              flexDirection: "column",
            }}
          >
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
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: "60vw" }}>
          
        </Box> */}
    </>
  );
}

export default App;
