/** @jsx h */
import { h } from 'preact';
import styled from 'styled-components';
import MainLayout from '../layout/MainLayout';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
const MainTypography = styled(Typography)`
  color: ${(props) => props.theme.palette.text.secondary};
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
`;

const Home = () => {
  return (
    <MainLayout>
      <MainCard>
        <TextContainer>
          <MainTypography variant="h5">
            Hello! My name is
          </MainTypography>
          <MainTypography
            variant="h1"
            style={{
              position: 'relative',
              left: '-8px',
              lineHeight: '6rem',
            }}
          >
            Remy Ho
          </MainTypography>
          <MainTypography
            variant="h6"
            style={{ margin: '1.5rem 0 0 0' }}
          >
            Front-end developer
          </MainTypography>
          <MainTypography variant="body1" gutterBottom paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt, asperiores tenetur aliquam ex illo perspiciatis
            perferendis facere pariatur officiis ipsam accusantium
            accusamus sint, obcaecati tempora? Repudiandae, dicta.
            Repudiandae, qui expedita?
          </MainTypography>
          <MainButton variant="contained">My projects</MainButton>
          <MainButton variant="contained">My contact</MainButton>
        </TextContainer>
        <IllustrationContainer />
      </MainCard>
      <LargeCard>test</LargeCard>
    </MainLayout>
  );
};

export default Home;
