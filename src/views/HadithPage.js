import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width:"100%"
  },
}));

export const HadithPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="أبي داود" {...a11yProps(0)} />
          <Tab label="احمد" {...a11yProps(1)} />
          <Tab label="البخاري" {...a11yProps(2)} />
          <Tab label="دارمي" {...a11yProps(3)} />
          <Tab label="مالك" {...a11yProps(4)} />
          <Tab label="مسلم" {...a11yProps(5)} />
          <Tab label="ناساي" {...a11yProps(6)} />
          <Tab label="ترمزي" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Three 33
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item Three 4
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item Three 5
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          Item Three 6
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          Item Three 7
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};
