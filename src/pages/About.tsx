/** @jsx h */
import { h, FunctionComponent } from 'preact';
import MainLayout from '../layout/MainLayout';

const About: FunctionComponent<{ path: string }> = ({
  path, // eslint-disable-line @typescript-eslint/no-unused-vars
}) => <MainLayout>About</MainLayout>;

export default About;
