import * as React from 'react';
import styled from 'styled-components';
import MainLayout from '../layout/MainLayout';
import { Typography } from '@mui/material';

const MainCard = styled.div`
  width: 1400px;
  margin: 0 auto;
  border: 1px black solid;
  height: 27rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  width: 100%;
  text-align: left;
`;

const Home = () => {
  return (
    <MainLayout>
      <MainCard>
        <TextContainer>
          <Typography variant="subtitle2">
            Hello! My name is
          </Typography>
          <p
            style={{
              lineHeight: '2.5rem',
              fontSize: '2.5rem',
              position: 'relative',
              left: '-4px',
            }}
          >
            Remy Ho
          </p>
          <Typography
            variant="body1"
            style={{ margin: '0.4rem 0 1rem 0' }}
          >
            Front-end developer
          </Typography>
          <Typography variant="body2" gutterBottom paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt, asperiores tenetur aliquam ex illo perspiciatis
            perferendis facere pariatur officiis ipsam accusantium
            accusamus sint, obcaecati tempora? Repudiandae, dicta.
            Repudiandae, qui expedita?
          </Typography>
        </TextContainer>
      </MainCard>
    </MainLayout>
  );
};

export default Home;
