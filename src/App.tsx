/** @jsx h */
import { h } from 'preact';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/reset.css';

import Home from './pages/Home';

const App = () => {
  return <Home />;
};

export default App;