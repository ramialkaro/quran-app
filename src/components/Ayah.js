import React, { useState, useEffect } from "react";
import { Container, Divider, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { apiFetch } from "../fetchData.js";
import { names } from "../names";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0EFF4",
    minHeight: "100vh",
    padding: theme.spacing(1),
  },
  sura: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(2),
    height: theme.spacing(16),
    color: "#3D2645",
    alignItems: "center",
    backgroundColor: "white",
    fontWeight: 300,
    fontSize: "22pt",
  },
  back: {
    textDecoration: "none",
    color: "grey",
    display: "flex",
    justifyContent: "start",
  },
  ayah: {
    backgroundColor: "#F0EFF4",
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(4),
    margin: theme.spacing(1),
    height: theme.spacing(16),
    color: "#3D2645",
    alignItems: "center",
    fontWeight: 300,
    fontSize: "18pt",
  },
}));

export const Ayah = ({ match }) => {
  const classes = useStyles();
  let {
    params: { id },
  } = match;
  let sura = require(`../data/Suras/surah_${id}.json`);

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container elevation={0} className={classes.sura}>
        <Grid item xs={1}>
          <Link className={classes.back} to="/">
            عودة
          </Link>
        </Grid>
        <Grid item container xs={11} justify="center">
          {names[id - 1]}
          <span>{sura.count}</span>
        </Grid>
      </Grid>
      {sura &&
        Object.values(sura.verse).map((verse) => {
          return (
            <Paper elevation={0} className={classes.ayah}>
              {verse}
              <img src="Ayah.svg" alt="" width={50} height={50} />
            </Paper>
          );
        })}

      <Divider />
    </Container>
  );
};
