/** @jsx h */
import { h, FunctionComponent } from 'preact';
import MainLayout from '../layout/MainLayout';
import Hero from '../containers/Home/Hero';
import Experience from '../containers/Home/Experience';
import Chat from '../containers/Home/Chat';
import Projects from '../containers/Home/Projects';

const Home: FunctionComponent<{ path: string }> = ({
  path, // eslint-disable-line @typescript-eslint/no-unused-vars
}) => (
  <MainLayout>
    <Hero />
    <Experience />
    <Chat />
    <Projects />
  </MainLayout>
);

export default Home;
