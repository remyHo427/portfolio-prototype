/** @jsx h */
import { h } from 'preact';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/reset.css';
import './styles/global.css';

import Router from 'preact-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

const App = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
    <Projects path="/projects" />
    <Contacts path="/contact" />
  </Router>
);

export default App;
