/** @jsx h */
import { h } from 'preact';
import { useRef } from 'preact/hooks';
import styled from 'styled-components';
import MainLayout from '../layout/MainLayout';
import Typography from '../components/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import CollapsibleList from '../components/CollapsibleList';
import Timeline from '../components/Timeline';

const MainCard = styled.div`
  width: 1400px;
  margin: 0 auto;
  height: 45rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  width: 50%;
  text-align: left;
`;
const IllustrationContainer = styled.div`
  width: 50%;
  height: 100%;
`;
const MainButton = styled(Button)`
  height: 3rem;
  width: 25%;
  & + & {
    margin-left: 1rem;
  }
`;
const LargeCard = styled.div`
  margin: auto;
  width: 1700px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;
const InnerCard = styled.div`
  width: 42%;
  min-width: 35rem;
`;

const Home = () => {
  const scrollRef = useRef(null);
  return (
    <MainLayout>
      <MainCard>
        <TextContainer>
          <Typography variant="h5">Hello! My name is</Typography>
          <Typography
            variant="h1"
            style={{
              position: 'relative',
              left: '-8px',
              lineHeight: '6rem',
            }}
          >
            Remy Ho
          </Typography>
          <Typography variant="h6" style={{ margin: '1.5rem 0 0 0' }}>
            Front-end developer
          </Typography>
          <Typography variant="body1" gutterBottom paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt, asperiores tenetur aliquam ex illo perspiciatis
            perferendis facere pariatur officiis ipsam accusantium
            accusamus sint, obcaecati tempora? Repudiandae, dicta.
            Repudiandae, qui expedita?
          </Typography>
          <MainButton variant="contained">My projects</MainButton>
          <MainButton variant="contained">My contact</MainButton>
        </TextContainer>
        <IllustrationContainer />
      </MainCard>
      <LargeCard
        ref={scrollRef}
        onClick={() => scrollRef.current.scrollIntoView()}
      >
        <InnerCard>
          <Typography variant="h2" align="center">
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
        </InnerCard>
        <Divider orientation="vertical" flexItem />
        <InnerCard>
          <Typography variant="h2" align="center">
            Experience
          </Typography>
          <Timeline
            data={[
              { time: '2020-01-01', legend: 'start' },
              { time: '2020-01-02', legend: 'start1' },
              { time: '2020-01-03', legend: 'start2' },
              { time: '2020-01-04', legend: 'start3' },
              { time: '2020-01-05', legend: 'start4' },
            ]}
          />
        </InnerCard>
      </LargeCard>
    </MainLayout>
  );
};

export default Home;
