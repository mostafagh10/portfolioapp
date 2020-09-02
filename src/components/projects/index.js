import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import AOS from 'aos';
class Projects extends Component{
  componentDidMount(){
    AOS.init({
      // initialise with other settings
      duration : 1000
    });
  }
  render(){
  return (
    <div className="Projects" id="projects">
      <div className="container">
      <h1 data-aos="fade-top">RECENT projects</h1>
      <Link to="/" data-aos="zoom-in"><button>ALL</button></Link>&nbsp;
      <Link to="/jsprojects" data-aos="zoom-in"><button>JS Projects</button></Link>&nbsp;
      <Link to="/reactprojects" data-aos="zoom-in"><button>React.js Projects</button></Link>&nbsp;
      <Link to="/reactappprojects" data-aos="zoom-in"><button>React.js Apps</button></Link>
    </div>
    </div>
  );
  }
}
/*
<h1 data-aos="fade-left">RECENT projects</h1>
      <Link to="/" data-aos="zoom-in"><button>ALL</button></Link>&nbsp;
      <Link to="/jsprojects" data-aos="zoom-in"><button>JS Projects</button></Link>&nbsp;
      <Link to="/reactprojects" data-aos="zoom-in"><button>React.js Projects</button></Link>&nbsp;
      <Link to="/reactappprojects" data-aos="zoom-in"><button>React.js Apps</button></Link>
*/

export default Projects;
