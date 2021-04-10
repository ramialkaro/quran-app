import React, { useState, useEffect } from "react";
import { Container, Divider, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { apiFetch } from "../fetchData.js"
import { names } from "../names"
import { Link } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    direction: "rtl",
   backgroundColor: "#F0EFF4",
    minHeight: "100vh",
    padding: theme.spacing(1),
  },
  sura: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    height: theme.spacing(16),
    color: "#3D2645",
    alignItems: "center",
    backgroundColor:"white",
    fontWeight: 300,
    fontSize: "22pt",
  },
  back:{
    textDecoration:"none",
    color:"grey",
    display:"flex",
    justifyContent:"start",
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
    const [ sura, setSura] =  useState( null )
  let {params: { id } } = match 
  useEffect( () => {
        apiFetch.get(`/sura/${id}`)
          .then(res => res.data)
        .then(data=> setSura( data))
        .catch(err => console.error( err ))

      }, [])
  return (
    <Container maxWidth="xl" className={classes.root}>

      <Grid  container elevation={0} className={classes.sura}>
        <Grid item xs={1}> 
        <Link className={classes.back} to="/">
        عودة
        </Link>
        </Grid>
        <Grid item container xs={11} justify="center"> 
          {names[id-1]}
        </Grid>
      </Grid>
    {
      sura && sura.map((ayah, index) => {
     
        return (
       <Paper key={index} elevation={0} className={classes.ayah}>
         {ayah.AyahText}
         <img src="Ayah.svg" alt="" width={50} height={50} />
      </Paper>
        ) } )

    }
       
      <Divider />
    </Container>
  );
};
