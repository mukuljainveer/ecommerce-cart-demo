import React, { useState } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Close } from "@mui/icons-material/";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    height: "100vh",
    width: 240,
  },
}));

function DefaultLayout({ children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);

  return (
    <>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box padding="10px 12px" alignItems="center" display="flex">
          <Box flex={1}>Close</Box>
          <Box>
            <IconButton onClick={() => setOpen(false)} size="small">
              <Close />
            </IconButton>
          </Box>
        </Box>
        <List
          sx={{ width: "100%", maxWidth: 560, bgcolor: "background.paper" }}
          component="nav"
        >
          {/* <ListItemButton>
            <ListItemText primary="Close Menu" />
            <Close />
          </ListItemButton> */}
          <ListItemButton>
            <ListItemText primary="Categories" />
          </ListItemButton>
          <ListItemButton onClick={() => setExpand(!expand)}>
            <ListItemText primary="Makeup" />
            {expand ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Face Makeup" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Lip Makeup" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Eye Makeup" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Brushes & Tools" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Box
        style={{ backgroundColor: "#3F3F3F", color: "white", padding: "10px" }}
        display="flex"
        alignItems="center"
      >
        <Box flex={1}>React App</Box>
        <Box>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      {children}
    </>
  );
}

export default DefaultLayout;
