import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    width:'95vw',
    height:'85vh'
    
},
}));
export const ListenPage = () => {
  const classes = useStyles()
  return (
    <Grid xl={12} lg={12} md={12} xs={11} className={classes.root}>
      <ReactPlayer
        url="https://youtu.be/n_k1pkKib6w"
        width="100%"
        height="100%"
        controls
        playsinline
        playing
      />
    </Grid>
  );
};
