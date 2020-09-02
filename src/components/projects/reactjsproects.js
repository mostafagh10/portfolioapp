import React , {Component} from 'react';
import axios from 'axios'
import './style.css'
import {motion} from 'framer-motion'
import AOS from 'aos';

const pagetranstion = {
  in : {
    opacity : 1,
    x : 0
  },
  out : {
    opacity : 0,
    x : -100
  }
}

class Reactprojects extends Component{
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
        x : res.data.reactproject
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
        <div className="col-lg-4 col-md-6" id="projecttwo" key={x.id} data-aos="flip-right">
              <div className="projectcard">
              <div className="card card2">
                <div className="over">
                  <h4>{x.name}</h4><br />
                  <a href={x.link} target="_blank"><button>visit website</button></a>
                </div>
                <img src={x.image} width="100%" height="100%"/>
              </div>
            </div>
            </div>
      )
    })
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pagetranstion} transition={{duration:1}} className="Reactprojects">
      <div className="container">
        <div className="row">
          {list}
        </div>
      </div>
    </motion.div>
  );
  }
}

export default Reactprojects;