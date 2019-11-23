import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import AlternateEmail from "@material-ui/icons/AlternateEmail"
import Phone from "@material-ui/icons/Phone"
import { FaFacebook  } from 'react-icons/fa';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Wapp from "components/Wapp/Wapp.jsx"
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  

  render() {
    const { classes } = this.props;
    const phone = {
      color:'#212121',
      position: 'absolute'
    }
    const facebook = {
      color:'#4267b2',
      position:'absolute'
    }
    const margin={
      margin: '0 10px'
    }
    return (
      <div className={classes.section} id="contacto">
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Para más info puede Contactárnos</h2>
            <h4 className={classes.description}>
              Envianos un e-mail haciendo click <a href="mailto:dl170195@gmail.com">AQUI</a>.<br/>
              Puede contactarnos haciendo click en los siguientes enlaces:
              <p> <AlternateEmail/> E-mail : <a href="mailto:dl170195@gmail.com">dl170195@gmail.com</a></p>
              <p> <Phone/> Teléfono : <a href="tel:3547521263">03547-15521263</a> </p>
                 
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    style={margin}
                  >
                    <a href="https://www.facebook.com/Estudio-Jur%C3%ADdico-Leyria-Zelechowski-y-Asoc-1377132792432086/" target="_blank" rel="noopener noreferrer" alt="" style={facebook}>
                      <FaFacebook/>
                    </a>

                  </Button>
                  <Button 
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    style={margin}
                  >
                     <Wapp number={'3547521263'} message={'Hola Damian, buen día, necesito hacerte una consulta, estas disponible en este momento?'}/>
                     
                  </Button>

                  <Button 
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    style={margin}
                    >
                
                    <a  href="tel:3547521263" style={phone}>
                       <Phone/>
                    </a>
                  </Button>
               
              <p> Encuentrenos en Córdoba, Alta Gracia, Av.Dalinger 520 </p>
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
