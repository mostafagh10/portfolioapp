import React , {Component} from 'react';
import ReactPlayer from "react-player";
import $ from 'jquery';
import './style.css'
import {Link} from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
class Home extends Component{

  componentDidMount(){
    $(document).ready(function(){
      $(window).on('load',function(){
        $(".homeheader").delay(2000).slideDown(1000,function(){
          $(".homeheader2").slideDown(1200,function(){
            $(".homebutton2").slideDown(700);
          });
        });
      })
    })
  }
  render(){
  return (
    <div className="Home" id="home">
      <div className="header">
        <div className="videoedit">
        <video muted="true" width="1550px" autoPlay loop>
                        <source src="Particles_9___49s___4k_res.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
        </video>
        </div>
        <div className="container content">
            <h1 className="homeheader">HELLO ,</h1><br /><br />
            <h1 className="homeheader2">MY NAME IS MOSTAFA GHAZALY</h1><br /><br />
            <div className="homebutton2">
            <Link
    activeClass="active"
    to="projects"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}><button className="homebutton">My Projects</button></Link>
    </div>
        </div>
    </div>
    </div>
  );
  }
}

export default Home;
