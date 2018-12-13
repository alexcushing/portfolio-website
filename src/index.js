import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Nav from './Components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


const Main = () => (
  <BrowserRouter>
    <main>
      <Nav />
      <Route exact path='/' component={App} />
      <Route exact path='/experience' component={Experience} />
      <Route exact path='/skills' component={Skills} />
      <Route exact path='/projects' component={Projects} />
    </main>
  </BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
