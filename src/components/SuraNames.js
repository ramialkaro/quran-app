import React from "react"
import { names } from "../names"
import {  Grid, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow:1,
    maxWidth:"100%",
    paddingTop: theme.spacing(3),
    justifyContent:"center",
  },
  grid:{
    textDecoration: "none",
  },
  paper: {
    padding:theme.spacing(5),
    textAlign:"center",
    width: 200,
    fontWeight: "200",
    fontSize:'16pt',
    backgroundColor: "#F0EFF4",
  }
}));


export const SuraNames = () =>{

  const classes = useStyles();
  return ( 
      <Grid container className={classes.root} spacing={2}>
      {
        names.map ((name, index) => {
          return (
            <Grid component={Link} to={`/sura/${index+1}`} key={index} className={classes.grid} item>
              <Paper className={classes.paper}>
                {name}
              </Paper>
            </Grid>
          )
      })} 
      </Grid>

  )

} 
