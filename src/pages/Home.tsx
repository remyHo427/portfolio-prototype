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
import GridView from '../components/GridView';

const MainCard = styled.div`
  width: 1400px;
  margin: 0 auto;
  height: ${(props: { height: string }) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  width: 50%;
  text-align: left;
`;
const HalfContainer = styled.div`
  width: 50%;
  height: 100%;
`;
const ButtonRightContainer = styled(HalfContainer)`
  display: flex;
  justify-content: right;
  align-items: center;
`;
const MainButton = styled(Button)`
  height: 3rem;
  width: 25%;
  & + & {
    margin-left: 1rem;
  }
`;
const LargeCard = styled(MainCard)`
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

const Home = () => {
  const scrollRef = useRef(null);
  return (
    <MainLayout>
      <MainCard height="45rem">
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
        <HalfContainer />
      </MainCard>
      <LargeCard
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
      </LargeCard>
      <MainCard height="17.5rem">
        <TextContainer>
          <Typography variant="h4" gutterBottom>
            Let&apos;s have a chat!
          </Typography>
          <Typography variant="subtitle1">
            You can reach me via Discord or email, I&apos;m always
            happy to meet new people. Potential employers, fellow
            developers, graphic designers, all are welcomed! :)
          </Typography>
        </TextContainer>
        <ButtonRightContainer>
          <MainButton variant="contained">Discord</MainButton>
          <MainButton variant="contained">Email</MainButton>
        </ButtonRightContainer>
      </MainCard>
      <MainCard height="auto">
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
      </MainCard>
    </MainLayout>
  );
};

export default Home;
