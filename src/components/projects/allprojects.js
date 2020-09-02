import React , {Component} from 'react';
import axios from 'axios'
import './style.css'
import {motion} from 'framer-motion'
import $ from 'jquery'
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

class Allprojects extends Component{
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
            x : res.data.all
          })
        })
      }

      render(){
        const {x} = this.state;
        const list = x.map(x => {
          return(
            <div className="col-lg-4 col-md-6" id="projecttwo" key={x.id}>
              <div className="projectcard" data-aos="flip-right">
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
        <div initial="out" animate="in" exit="out" variants={pagetranstion} transition={{duration:1}} className="Allprojects">
          <div className="container">
            <div className="row">
              {list}
            </div>
          </div>
        </div>
      );
      }
}

export default Allprojects;