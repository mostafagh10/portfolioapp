import React , {Component} from 'react';
import Nav from './components/navbar/index';
import Home from './components/home/index';
import About from './components/about/index';
import Skills from './components/skills/index';
import Projects from './components/projects/index';
import Contact from './components/contact/index';
import Footer from './components/footer/index';
import JSprojects from './components/projects/jsprojects';
import Reactprojects from './components/projects/reactjsproects';
import Reactapps from './components/projects/reactapps';
import Allprojects from './components/projects/allprojects';
import {BrowserRouter,Route,Switch,useLocation,HashRouter} from 'react-router-dom';
import {AnimatePresence,motion} from 'framer-motion';
import $ from 'jquery';
import Helmet from 'react-helmet'

const title = "My Portfolio"
class App extends Component{
  componentDidMount(){
    $(document).ready(function(){
    $(window).on('load',function(){
      $("body").css("overflow-y","auto");
      $(".loadingover").fadeOut(1500,function(){
        $(this).remove();
        $("body").css("overflow-y","auto");
      });
    })
   })
  }
  render(){
  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Nav />
      <Home />
      <About /><br /><br /><br /><br />
      <Skills /><br /><br /><br /><br />
      <AnimatePresence exitBeforeEnter>
        <HashRouter>
        <Projects />
        <Route exact path="/" component={Allprojects} />
        <Route exact path="/jsprojects" exact component={JSprojects} />
        <Route exact path="/reactprojects" exact component={Reactprojects} />
        <Route exact path="/reactappprojects" exact component={Reactapps} />
        </HashRouter>
        </AnimatePresence>
      <br /><br /><br /><br />
      <Contact /><br /><br />
      <Footer />  
      <section className="loadingover">
      <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      </div>
      </section> 
    </div>
  );
  }
}
/*
<Home />
      <About /><br /><br /><br /><br />
      <Skills /><br /><br /><br /><br />
      <AnimatePresence exitBeforeEnter>
        <HashRouter>
        <Projects />
        <Route exact path="/" component={Allprojects} />
        <Route exact path="/jsprojects" exact component={JSprojects} />
        <Route exact path="/reactprojects" exact component={Reactprojects} />
        <Route exact path="/reactappprojects" exact component={Reactapps} />
        </HashRouter>
        </AnimatePresence>
      <br /><br /><br /><br />
      <Contact /><br /><br />
      <Footer />  
      <section className="loadingover">
      <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      </div>
      </section> 
*/

export default App;
