import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Box, Grid, Typography, Slider } from "@material-ui/core";
import { abi_daud } from "../data/Hadith/abi_daud";
import { Hadith } from "../components/Hadith";

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
      {value === index && <Box p={3}>{children}</Box>}
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
    width: "100%",
  },
  hadithContainer: {
    overflow: 'auto',
    marginTop: theme.spacing(4)

  }
}));

export const HadithPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [hadithSliderValue, setHadithSliderValue] = React.useState([0, 7]);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleHadithSlider = (evet, newValue) => {
    setHadithSliderValue(newValue)
  }

  let hadithNamesList = [
    "أبي داود",
    "احمد",
    "البخاري",
    "دارمي",
    "مالك",
    "مسلم",
    "ناساي",
    "ترمزي",
  ];

  // logs the abi daud data

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
          {hadithNamesList.map((label, index) => {
            return <Tab key={index} label={label} {...a11yProps(index)} />;
          })}
        </Tabs>
      </AppBar>
      {hadithNamesList.map((label, index) => {
        return (
          <TabPanel
            key={index}
            value={value}
            index={index}
            dir={theme.direction}
            className={classes.tabpanel}
          >
            <Typography id="hadith-silder" gutterBottom> 
              Al-Hadith Ranger 
            </Typography>
            <Slider
              value={hadithSliderValue}
              valueLabelDisplay="auto"
              aria-labelledby="hadith-slider"
              onChange={handleHadithSlider}
              max={abi_daud.length}
            />
            <Grid container spacing={2} className={classes.hadithContainer}>

            {
            abi_daud.slice(hadithSliderValue[0],hadithSliderValue[1]).map(hadith => {
              return (
                <Grid item > 
                  <Hadith hadith={ hadith }/>
                </Grid>
              )
            })

            }
            </Grid>
          </TabPanel>
        );
      })}
    </div>
  );
};
