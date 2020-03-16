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
   const maps = {
     width:'100%',
     height: 300
   }
    return (
      <div className={classes.section} id="contacto">
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Para más info puede Contactarnos</h2>
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
                    <a href="https://www.facebook.com/Estudio.Juridico.Integral1994/?__tn__=%2CdkCH-R-R&eid=ARDzAT9DrBCQQ7uxdApTXquCsFAWL9Rbiorbmk-Ezj2U2uzpRXZjQ-GyqGNIvV0UmsZUNlamtEeO-4qG&hc_ref=ARRIbWOupKuuY3lXJajCt-ZuIKls_1bmXg1RpazgB7EFEZCdkBgbycbGasHisx_FLRc&fref=nf&hc_location=group/" target="_blank" rel="noopener noreferrer" alt="" style={facebook}>
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
               
              <h2> Encuentrenos en Alta Gracia, Córdoba, Av.Dalinger 520 </h2>
            </h4>
            <div className={classes.section} >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13585.511447661269!2d-64.427687!3d-31.6508804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5eec8e44d99b800!2sEstudio%20Jur%C3%ADdico%20-%20Leyria%20Zelechowski%20y%20Asoc.!5e0!3m2!1ses-419!2sar!4v1575030405397!5m2!1ses-419!2sar"
                frameBorder={0}
                title="mapa"
                scrolling="vertical"
                allowFullScreen
                style={maps}
            />
            
            </div>
          </GridItem>
         
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
