import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/homepage/homepage';
import { ContactPage } from './pages/contact/contactpage';
import {AboutPage} from './pages/about/aboutPage';
import { NoMatch } from './pages/nomatch/nomatch';
import  {Layout}  from './assets/layout/layout';
import  {NavigationBar}  from './assets/navbar/navbar';
import {Jumbotron} from './assets/jumbotron/jumbotron';
import {MetodoUso} from './pages/metodo-Uso/metodoUso';
import {Preguntas} from './pages/Preguntas/preguntas';
import {DondeComprar} from './pages/dondecomprar/DondeComprar';
import {Footer} from './assets/footer/footer';
import {LavadoNasal} from './pages/LavadoNasal/lavadonasal';


class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Jumbotron />
    <NavigationBar />
      <Layout>
    <Router>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route  path="/about" component={AboutPage} />
      <Route  path="/contact" component={ContactPage} />
      <Route  path="/MetodoUso" component={MetodoUso} />
      <Route  path="/preguntas" component={Preguntas} />
      <Route  path="/dondecomprar" component={DondeComprar} />
      <Route  path="/lavadonasal" component={LavadoNasal} />
      <Route component={NoMatch} />
      </Switch>
    </Router>
    </Layout>
    <Footer />
    </React.Fragment>
    );
  }
}

export default App;
