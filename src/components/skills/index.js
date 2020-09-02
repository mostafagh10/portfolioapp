import React , {Component} from 'react';
import axios from 'axios'
import AOS from 'aos';
import './style.css'

class Skills extends Component{
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
        x : res.data.skills
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
        <div className="col-lg-4 col-md-6" key={x.id}>
          <div className="card skillscard" data-aos="flip-up" Style="background:none; height:250px; border:1px solid white; margin-top:10px; padding:40px">
            <div className="loader">
            <h1 className="power">{x.power}%</h1><br />
            </div><br />
            <h4 className="skillsname">{x.name}</h4>
          </div>
        </div>
      )
    })
  return (
    <div className="Skills" id="skills">
      <div className="container">
        <h1 className="skillstitle" data-aos="fade-right">SKILLS</h1>
        <div className="row">
          {list}
        </div>
      </div>
    </div>
  );
  }
}

export default Skills;
