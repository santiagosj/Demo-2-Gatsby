import React, { Component } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

class Wapp extends Component {

    render(){
        
        const styles = {
            color:'#212121',
            position: 'absolute'
        }

        const { number, message } = this.props;

        const linkAPI = `https://api.whatsapp.com/send?phone=549${number}&text=%20${message}`;

        return(
                <a href={linkAPI} target="_blank" rel="noopener noreferrer" style={styles}> <FaWhatsapp/> </a>
        )
    }
}

export default Wapp;