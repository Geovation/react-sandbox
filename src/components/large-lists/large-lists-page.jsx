import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./tab-panel.js";
import InfiniteScrollList from "./infinite-scroll-lists.jsx";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "90vh"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

function LargeListsPage() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Scrollable lists"
        className={classes.tabs}
      >
        <Tab label="Infinite scroll" {...a11yProps(0)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <InfiniteScrollList />
      </TabPanel>
    </div>
  );
}

export default LargeListsPage;
