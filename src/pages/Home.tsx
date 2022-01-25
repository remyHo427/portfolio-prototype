/** @jsx h */
import { h, FunctionComponent } from 'preact';
import MainLayout from '../layout/MainLayout';
import Hero from '../containers/Hero';
import Experience from '../containers/Experience';
import Projects from '../containers/Projects';
import Contacts from '../containers/Contacts';

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
