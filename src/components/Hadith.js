import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const Hadith = ({ hadith }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://source.unsplash.com/LanJEVFzxPw"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {hadith.number}
          </Typography>

          <Typography
            noWrap
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {hadith.hadith}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          component={Link}
          to={`/hadith/${hadith.number}`}
          color="primary"
        >
          اقرأ أكثر
        </Button>
      </CardActions>
    </Card>
  );
};
