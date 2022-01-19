/** @jsx h */
import { h } from 'preact';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;
const GridContainer = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-columns: 48.5% 48.5%;
  grid-gap: 1rem;
`;
const Window = styled.div`
  height: 15rem;
  border: 1px solid ${(props) => props.theme.palette.divider};
`;

const GridView = () => {
  return (
    <Container>
      <GridContainer>
        <Window>1</Window>
        <Window>2</Window>
        <Window>3</Window>
        <Window>4</Window>
      </GridContainer>
    </Container>
  );
};

export default GridView;
