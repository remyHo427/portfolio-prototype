/** @jsx h */
import { h, FunctionComponent } from 'preact';
import MainLayout from '../layout/MainLayout';
import Hero from '../containers/Home/Hero';
import Experience from '../containers/Home/Experience';
import Projects from '../containers/Home/Projects';
import Contacts from '../containers/Home/Contacts';

const Home: FunctionComponent<{ path: string }> = ({
  path, // eslint-disable-line @typescript-eslint/no-unused-vars
}) => (
  <MainLayout>
    <Hero />
    <Experience />
    <Projects />
    <Contacts />
  </MainLayout>
);

export default Home;
