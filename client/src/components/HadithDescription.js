import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { abi_daud } from "../data/Hadith/abi_daud";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
    padding: theme.spacing(5),
    justifyContent: "center",
  },
  hadith: {
    padding: theme.spacing(5),
    borderRadius:4,
    margin: theme.spacing(2),
    backgroundColor: "#F0EFF4",
  },
  text:{
    margin: theme.spacing(3)
  },
  desc: {
    padding: theme.spacing(5),
    margin: theme.spacing(2),
  },
  searchTerm: {
    padding: theme.spacing(5),
    margin: theme.spacing(2),
  },
}));
export const HadithDescription = ({ match }) => {
  const classes = useStyles();
  let {
    params: { id },
  } = match;

  let currentHadith = abi_daud[id];
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item className={classes.hadith}>
        <Typography variant="h4" component="h4">الحديث الشريف</Typography>
        <Typography className={classes.text} variant="h6" component="h6">
          {currentHadith.hadith}
        </Typography>
      </Grid>

      <Divider />
      <Typography className={classes.desc}>
        {currentHadith.description}
      </Typography>
      <Divider />
      <Typography className={classes.searchTerm}>
        {currentHadith.searchTerm}
      </Typography>
    </Grid>
  );
};
