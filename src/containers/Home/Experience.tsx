/** @jsx h */
import { h } from 'preact';
import { useRef } from 'preact/hooks';
import { StripeCard, HalfContainer } from './common';
import styled from 'styled-components';
import CollapsibleList from '../../components/CollapsibleList';
import Typography from '../../components/Typography';
import Timeline from '../../components/Timeline';
import Divider from '../../components/Divider';

const StretchCard = styled(StripeCard)`
  align-items: stretch;
`;

const timelineData = [
  {
    time: '2021-01-01',
    title: 'item1',
    desc: `this is a description`,
  },
  {
    time: '2021-01-02',
    title: 'item2',
    desc: 'this is a description',
  },
  {
    time: '2021-01-03',
    title: 'item3',
    desc: 'this is a description',
  },
  {
    time: '2021-01-04',
    title: 'item4',
    desc: 'this is a description',
  },
];

const Experience = () => {
  const scrollRef = useRef(null);
  return (
    <StretchCard
      height="auto"
      ref={scrollRef}
      onClick={() => scrollRef.current.scrollIntoView()}
    >
      <HalfContainer>
        <Typography variant="h2" align="center" gutterBottom>
          Toolchain
        </Typography>
        <CollapsibleList
          title="Languages"
          items={[
            'JavaScript',
            'TypeScript',
            'Node.js',
            'HTML',
            'CSS',
          ]}
        />
        <CollapsibleList
          title="Frameworks"
          items={['React', 'Preact', 'Svelte', 'Vue', 'Jest']}
        />
        <CollapsibleList
          title="Development Tools"
          items={[
            'Webpack',
            'Styled Components',
            'Sass',
            'Prettier',
            'ESLint',
          ]}
        />
        <CollapsibleList
          title="Version Control"
          items={['Git', 'GitHub', 'GitLab']}
        />
      </HalfContainer>
      <Divider orientation="vertical" flexItem />
      <HalfContainer>
        <Typography variant="h2" align="center" gutterBottom>
          Experience
        </Typography>
        <Timeline data={timelineData} />
      </HalfContainer>
    </StretchCard>
  );
};

export default Experience;
