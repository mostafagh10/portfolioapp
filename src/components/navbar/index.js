import React , {Component} from 'react';
import {Link} from 'react-scroll'
import './style.css';
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faBars);

class Nav extends Component {

  componentDidMount(){
    $(document).ready(function(){
      $(window).scroll(function(){
      var body = $(window);
      var top = body.scrollTop();
      console.log(top);
      if(top > 660){
        $(".navbar").css("backgroundColor","rgb(58, 57, 57)");
      }
      else if(top < 660){
        $(".navbar").css("background","none");
      }
    })
      $(".collapse ul li").click(function(){
        $(this).attr("id","isactive");
        $(this).siblings().removeAttr("id");
      })
    })
  }
  render(){
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-lg navbar bg" id="navone">
      <div className="container">
  <h2 className="navbar-brand">MOSTAFA <span className="navthree">GHAZALY</span></h2>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"><FontAwesomeIcon className="navtwo" icon="bars" /></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
        <a className="nav-link" data-scroll="home" href="#home">HOME</a>
    </Link>
      </li>
      <li className="nav-item">
      <Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
        <a className="nav-link" data-scroll="about" href="#">ABOUT</a></Link>
      </li>
      <li className="nav-item">
      <Link
    activeClass="active"
    to="skills"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
        <a className="nav-link" data-scroll="skills" href="#">SKILLS</a>
    </Link>
      </li>
      <li className="nav-item">
      <Link
    activeClass="active"
    to="projects"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
    <a className="nav-link" data-scroll="projects" href="#">PROJECTS</a>
    </Link>
      </li>
      <li className="nav-item">
      <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}>
        <a className="nav-link" data-scroll="contact" href="#">CONTACT</a>
        </Link>
        <FontAwesomeIcon icon="Bars" />
      </li>
    </ul>
    </div>
  </div>
</nav>
    </div>
  );
  }
}

export default Nav;
