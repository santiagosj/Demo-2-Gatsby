import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

import Check from "@material-ui/icons/Check"
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="servicios">
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Nuestros Servicios</h2>
            <h5 className={classes.description}>
              Estos son los servicios que ofrecemos y podrá encontrar aquí una referencia de los mismos.<br/>
              De todas maneras le aconcejamos que no dude en comunicarse con nosotros y contarnos sobre su situación y le explicaremos como proceder.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Contratos"
                description="Confección, revisión y resolución de contratos sobre bienes muebles e inmuebles. Contratos comerciales nacionales e internacionales de mercadería. Contratos de servicios. Licencias de software. Constitución de sociedades. Contratos de consumo."
                icon={Check}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Daños y Perjuicios"
                description="Accidentes de tránsito. Acciones y defensas de aseguradoras y terceros. Mala praxis médica. Daño moral, emergente, lucro cesante e inmaterial. Espectáculos públicos. Actividades riesgosas. Daño ambiental. Delitos derivados."
                icon={Check}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Delitos Informáticos"
                description="Estafas. Ciberacoso. Suplantación de identidad. Amenazas y coacciones. Hacking. Grooming. Violacion de secretos y de la privacidad."
                icon={Check}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Derechos Reales"
                description="Derechos posesorios. Usucapiones. Cesiones, estudios de titularidad, dominio y gravámenes. Acciones y defensas de la propiedad y de la posesión."
                icon={Check}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Derechos Laboral"
                description="Diferencias salariales. Despidos. Indemnizaciones. Enfermedades y accidentes."
                icon={Check}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Derechos Familiar"
                description="Declaratoria de herederos. Cuota Alimentaria. Compensaciones económicas. Regímenes de visita y comunicación. Sucesiones. Adjudicación de bienes. Particiones. Divorcios y compensaciones económicas. Acciones de filiación."
                icon={Check}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Concursos y quiebras"
                description="Concursos preventivos. Verificación de créditos. Quiebra e insolvencia."
                icon={Check}
                iconColor="success"
                vertical
              />
            </GridItem>
            
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
