import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import AlternateEmail from "@material-ui/icons/AlternateEmail"
import Phone from "@material-ui/icons/Phone"
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="contacto">
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Para más info puede Contactárnos</h2>
            <h4 className={classes.description}>
              Envianos un mensaje haciendo click <a href="mailto:dl170195">AQUI</a>.<br/>
              Nuestros datos de contacto:
              <p> <AlternateEmail/>  : <a href="mailto:dl170195"> dl170195@gmail.com </a> </p>
              <p> <Phone/>  : <a href="tel:3547521263">3547521263</a> </p>
              <p>Encontranos en Córdoba, Alta Gracia, Av.Dalinger 520</p>
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
