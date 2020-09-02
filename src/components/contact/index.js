import React , {Component} from 'react';
import './style.css';
import axios from 'axios';
import AOS from 'aos';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt,faEnvelope,faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faMobileAlt,faEnvelope,faMapMarkerAlt);

class Contact extends Component{
  state = {
    x : []
  }

  componentDidMount(){
    AOS.init({
      // initialise with other settings
      duration : 1000
    });
    axios.get("data.json").then(res => {
      this.setState({
        x:res.data.contact
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
        <div className="col-md-4">
          <div className="card contactcard" data-aos="flip-left">
          <FontAwesomeIcon className="contacticon" icon={x.icon} /><br />
          <h3 className="card-text-top">{x.name}</h3>
          <p>{x.details}</p>
          </div>
        </div>
      )
    })
  return (
    <div id="contact" id="contact" className="Contact">
      <div className="container">
        <h1 className="contactheader" data-aos="fade-right">CONTACT INFO</h1><br /><br />

    <div className="row">
      {list}
    </div>
    </div>
    </div>
   )
  }
}

export default Contact;
