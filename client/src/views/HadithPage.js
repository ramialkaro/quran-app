import React from "react";
import { Hadith } from "../components/Hadith";
import { Grid } from "@material-ui/core";
import { abi_daud } from "../data/Hadith/abi_daud";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
    paddingTop: theme.spacing(3),
    justifyContent: "center",
  },
  grid: {
    textDecoration: "none",
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    width: 200,
    backgroundColor: "#F0EFF4",
  },
}));
export const HadithPage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      {abi_daud.slice(0, 10).map((hadith) => {
        return (
          <Grid item key={hadith.nubmer}>
            <Hadith hadith={hadith} />
          </Grid>
        );
      })}
    </Grid>
  );
};
