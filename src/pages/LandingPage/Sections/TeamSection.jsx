import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Phone from "@material-ui/icons/Phone"
// React icons
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Wapp from "components/Wapp/Wapp.jsx"

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/claudio.jpg";
import team2 from "assets/img/faces/sofia.jpg";
import team3 from "assets/img/faces/damian.jpg";

class TeamSection extends React.Component {
  
  render() {
    const { classes } = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    const linkedin = {
      color:'#0077b5',
      position: 'absolute'
    }
    
    const phone = {
      color:'#212121',
      position: 'absolute'
    }
    
    return (
      <div className={classes.section} id="nosotros">
        <h2 className={classes.title}>Conozca a nuestros profesionales</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Claudio Leyria Zelechowski 
                  <br />
                  <small className={classes.smallTitle}>Abogado Principal</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>

                  <Button 
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                     <Wapp number={'3547596899'} message={'Hola Dr.Layria, necesito hacerte una consulta, estas disponible en este momento?'}/>
                  </Button>

                  <Button 
                    justIcon
                    color="transparent"
                    className={classes.margin5}>
                    <a  href="tel:3547596899" style={phone}>
                       <Phone/>
                    </a>
                  </Button>

                </CardFooter>
              </Card>

            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Sofia Liguori 
                  <br />
                  <small className={classes.smallTitle}>Asociada</small>
                </h4>
               
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                     <a href="https://www.linkedin.com/in/sofia-liguori-87776617a/" target="_blank" rel="noopener noreferrer" alt="" style={linkedin}>
                        <FaLinkedin/>
                    </a>
                  </Button>
                  <Button 
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <Wapp number={'3512084530'} message={'Hola Sofía, necesito hacerte una consulta, estas disponible en este momento?'}>
                        <FaWhatsapp/>
                    </Wapp>
                     
                  </Button>

                  <Button 
                    justIcon
                    color="transparent"
                    className={classes.margin5}>
                    <a  href="tel:3512084530" style={phone}>
                       <Phone/>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                   Damian Leyria 
                  <br />
                  <small className={classes.smallTitle}>Asociado</small>
                </h4>
               
                <CardFooter className={classes.justifyCenter}>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                      <a href="https://www.linkedin.com/in/damian-leyria-a18782172/" target="_blank" rel="noopener noreferrer" alt="" style={linkedin}>
                         <FaLinkedin />
                      </a>  

                  </Button>
                  <Button 
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <Wapp number={'3547521263'} message={'Hola Damian, buen día, necesito hacerte una consulta, estas disponible en este momento?'}>
                        <FaWhatsapp/>
                    </Wapp>
                     
                  </Button>

                  <Button 
                    justIcon
                    color="transparent"
                    className={classes.margin5}>
                    <a  href="tel:3547521263" style={phone}>
                       <Phone/>
                    </a>
                  </Button>
                  
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
