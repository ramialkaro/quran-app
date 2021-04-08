import React, { useState, useEffect } from "react";
import { Container, Divider, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { apiFetch } from "../fetchData.js"

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
    justifyContent: "center",
    fontWeight: 300,
    fontSize: "22pt",
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

export const Ayah = () => {
  const classes = useStyles();
  
  
    const [ sura, setSura] =  useState( null )

      useEffect( () => {
        apiFetch.get('/sura/2')
          .then(res => res.data)
        .then(data=> setSura( data))
        .catch(err => console.error( err ))

      }, [])
      console.log("First sura is here ", sura)
   
  return (
  <Container maxWidth="xl" className={classes.root}>

      <Paper variant="outlined" elevation={0} className={classes.sura}>
        الفاتحة{" "}
      </Paper>
    {
      sura && sura.map( ayah => {
     
        return (
       <Paper elevation={0} className={classes.ayah}>
         {ayah.AyahText}
        <img src={"Ayah.svg"} width={50} height={50} />
      </Paper>
        ) } )

    }
       
      <Divider />
    </Container>
  );
};
