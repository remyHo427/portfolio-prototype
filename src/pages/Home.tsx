/** @jsx h */
import { h } from 'preact';
import styled from 'styled-components';
import MainLayout from '../layout/MainLayout';
import Typography from '../components/Typography';
import Button from '@mui/material/Button';

import CollapsibleList from '../components/CollapsibleList';

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
  align-items: center;
  justify-content: center;
`;
const InnerCard = styled.div`
  width: 40%;
  height: 45rem;
`;
const Divider = styled.div`
  width: 2.5px;
  height: 45rem;
  background-color: ${(props) => props.theme.palette.divider};
`;

const Home = () => {
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
      <LargeCard>
        <InnerCard>
          <Typography variant="h2" align="center">
            Toolchain
          </Typography>
          <CollapsibleList
            title="HTML, CSS and JS/TS"
            items={[
              'React & Preact',
              'Styled Components',
              'Sass',
              'Material UI',
            ]}
          />
        </InnerCard>
        <Divider />
        <InnerCard>
          <Typography variant="h2" align="center">
            Experience
          </Typography>
        </InnerCard>
      </LargeCard>
    </MainLayout>
  );
};

export default Home;
