/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
//import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
//import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
//import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
//import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  const padding = {
    padding: '9px'
  }
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
          <Link to="/#servicios" className={classes.listItem} style={padding}>
              Servicios
          </Link>
      </ListItem>
      
      <ListItem className={classes.listItem}>
          <Link to="/#nosotros" className={classes.listItem} style={padding}>
              Nosotros
          </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
          <Link to="/#contacto" className={classes.listItem} style={padding} >
              Contacto
          </Link>
      </ListItem>
      
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
