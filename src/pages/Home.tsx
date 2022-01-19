/** @jsx h */
import { h } from 'preact';
import MainLayout from '../layout/MainLayout';
import Hero from '../containers/Home/Hero';
import Experience from '../containers/Home/Experience';
import Chat from '../containers/Home/Chat';
import Projects from '../containers/Home/Projects';

const Home = () => (
  <MainLayout>
    <Hero />
    <Experience />
    <Chat />
    <Projects />
  </MainLayout>
);

export default Home;
