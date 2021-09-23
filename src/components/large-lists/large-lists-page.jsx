import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./tab-panel.js";
import InfiniteScrollList from "./infinite-scroll-lists.jsx";
import ListsPagination from "./lists-pagination.jsx";
import Box from "@mui/material/Box";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

function LargeListsPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "90vh"
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Scrollable lists"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Infinite scroll" {...a11yProps(0)} />
        <Tab label="Pagination" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <InfiniteScrollList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListsPagination />
      </TabPanel>
    </Box>
  );
}

export default LargeListsPage;
