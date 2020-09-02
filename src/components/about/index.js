import React , {Component,useEffect} from 'react';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class About extends Component{

  componentDidMount(){
    AOS.init({
      // initialise with other settings
      duration : 1000
    });
  }
  render(){
  return (
    <div className="About" id="about">
      <div className="container">
        <h1 data-aos='fade-right' className="abouttitle">ABOUT ME</h1><br />
        <h4 data-aos='fade-left' className="abouttext">I am seeking a challenging position which my
educational background and my skills can be
enhanced, and a new role with a lead company to
apply invaluable knowledge in charting a mutually
beneficial growth path. I would like to use my skills
to benefit my employer and in return gain job
satisfaction in the fields related to my experience. I
have good organizational skills, ambitious, self
motivated, target oriented and a team Worker
</h4><br />
<a href="Mostafa's Resume (1).pdf" download><button data-aos="fade-right" className="aboutbutton">Download MY CV</button></a>
      </div>
    </div>
  );
  }
}

export default About;
