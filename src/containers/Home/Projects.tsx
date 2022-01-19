/** @jsx h */
import { h } from 'preact';
import GridView from './gridView';
import { StripeCard, HalfContainer } from './common';
import Typography from '../../components/Typography';
import Divider from '../../components/Divider';

const Projects = () => (
  <StripeCard height="auto">
    <HalfContainer>
      <Typography align="center" variant="h2">
        Workflow
      </Typography>
      <Typography paragraph variant="body1" align="center">
        The approach I use to build my personal projects
      </Typography>
      <GridView />
    </HalfContainer>
    <Divider orientation="vertical" flexItem />
    <HalfContainer>
      <Typography align="center" variant="h2">
        Projects
      </Typography>
      <Typography paragraph variant="body1" align="center">
        Here are my projects, using said approach.
      </Typography>
      <GridView />
    </HalfContainer>
  </StripeCard>
);

export default Projects;
