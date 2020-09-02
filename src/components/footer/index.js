import React , {Component} from 'react';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faLinkedin,faInstagram } from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faFacebook,faTwitter,faLinkedin,faInstagram);

class Footer extends Component {
  render(){
  return (
    <div className="Footer">
    <div className="container">
    <h3>MOSTAFA <span className="footertitle">GHAZALY</span></h3><br />
    <h5>Your Complete Web Solution</h5><br />
            <a href="https://www.facebook.com/mostafa.hasan.1610/" target="_blank"><FontAwesomeIcon className="footericon" icon={faFacebook} /></a>
            <a href="https://www.instagram.com/mostafaghazaly311/?hl=en" target="_blank"><FontAwesomeIcon className="footericon" icon={faInstagram} /></a>
            <a href="https://twitter.com/mostafa40145330" target="_blank"><FontAwesomeIcon className="footericon" icon={faTwitter} /></a>
            <a href="https://www.linkedin.com/in/mostafa-ghazaly-5a1686171/" target="_blank"><FontAwesomeIcon className="footericon" icon={faLinkedin} /></a><br /><br />
    <p>copyRight @ 2020 All Right Done</p>
    </div>
    </div>
  );
  }
}

export default Footer;
