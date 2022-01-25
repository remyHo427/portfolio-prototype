/** @jsx h */
import { h } from 'preact';
import styled from 'styled-components';
import GridView, { BigWindow } from './gridView';
import { StripeCard, HalfContainer } from './common';
import Typography from '../../components/Typography';
import Divider from '../../components/Divider';

const data = [
  {
    title: '1',
    subtitle: 'Design',
    paragraph:
      'Obtaining a design outlining the overall layout of the project, usually from a free and open sourced origin.',
  },
  {
    title: '2',
    subtitle: 'Prototyping',
    paragraph:
      'Prototype with UI libraries, such as Material UI, React and styled-components to produce a working website.',
  },
  {
    title: '3',
    subtitle: 'Testing',
    paragraph:
      'Use Jest to write test suites for the prototype, to ensure it is 100% working as intended',
  },
  {
    title: '4',
    subtitle: 'Optimization',
    paragraph:
      'Replace all Library components code with hand-written ones, reduce bundle size by using lighter alternatives',
  },
];

const WorkflowWindowContainer = styled(BigWindow)`
  display: flex;
  flex-direction: column;
`;

const Projects = () => (
  <StripeCard height="auto">
    <HalfContainer>
      <Typography align="center" variant="h2">
        Workflow
      </Typography>
      <Typography paragraph variant="body1" align="center">
        The approach I use to build my personal projects
      </Typography>
      <GridView bigWindow>
        {data.map(({ title, subtitle, paragraph }, key) => (
          <WorkflowWindow
            title={title}
            subtitle={subtitle}
            paragraph={paragraph}
            key={key}
          />
        ))}
      </GridView>
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

const WorkflowWindow = ({
  title,
  subtitle,
  paragraph,
  key,
}: {
  title: string;
  subtitle: string;
  paragraph: string;
  key: number;
}) => {
  return (
    <WorkflowWindowContainer key={key}>
      <Typography variant="h2" align="center">
        {title}
      </Typography>
      <Typography variant="h5" align="center">
        {subtitle}
      </Typography>
      <Typography variant="body1" align="center">
        {paragraph}
      </Typography>
    </WorkflowWindowContainer>
  );
};

export default Projects;
