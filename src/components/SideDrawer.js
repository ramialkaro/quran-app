import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import InfoIcon from "@material-ui/icons/Info";
import { SuraNames } from "./SuraNames";
import { Link, Route, Switch } from "react-router-dom";
import NoteIcon from "@material-ui/icons/Note";
import { HadithPage } from "../views/HadithPage";
import { AzkarPage } from "../views/AzkarPage";
import { ListenPage } from "../views/ListenPage";
import { HadithDescription } from "./HadithDescription";
import { Ayah } from "./Ayah";
import * as momentH from "moment-hijri"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function SideDrawer(child) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  let nn = momentH(new  Date(Date.now())).format("iD iMMMM iYYYY")
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            {<MenuBookIcon style={{ margin: "0 6pt" }} />}???????????? ????????????
          </Typography>
          <Typography variant="h6">
            {nn}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <Switch>
          <Route exact path="/" component={SuraNames} />
          <Route path="/azkar" component={AzkarPage} />
          <Route path="/listen" component={ListenPage} />
          <Route exact path="/hadith" component={HadithPage} />
          <Route path="/hadith/:id" component={HadithDescription} />
          <Route path="/sura/:id" component={Ayah} />
        </Switch>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem component={Link} to="/">
            <ListItemIcon>
              <MenuBookIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"???????? ????????????"} />
          </ListItem>
          <ListItem component={Link} to="/listen">
            <ListItemIcon>
              <GraphicEqIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"????????????????"} />
          </ListItem>
          <ListItem component={Link} to="/azkar">
            <ListItemIcon>
              <NoteIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"??????????"} />
          </ListItem>{" "}
          <ListItem component={Link} to="/hadith">
            <ListItemIcon>
              <ChromeReaderModeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"???????????? ????????????"} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"?????????????? ??????"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
