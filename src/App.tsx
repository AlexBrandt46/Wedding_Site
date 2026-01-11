import "./App.css";
import { AppBar, Box, Button, Tab, Tabs, Toolbar } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import EventInfo from "./components/EventInfo";

const pages = ["Main", "Our Story", "Event Info"];

function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <AppBar>
          <img id="usImage" height={"200"} />
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
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Main" value="1" />
                <Tab label="Our Story" value="2" />
                <Tab label="Event Info" value="3" />
                <Tab label="RSVP" value="4" />
              </TabList>
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: "60vw" }}>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">
            <EventInfo />
          </TabPanel>
          <TabPanel value="4">Item Three</TabPanel>
        </Box>
      </TabContext>
    </>
  );
}

export default App;
