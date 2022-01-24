/** @jsx h */
import { h, FunctionalComponent, ComponentChildren } from 'preact';
import styled from 'styled-components';
import { useState } from 'preact/hooks';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import ArrowBackwardIos from '@mui/icons-material/ArrowBackIos';

const Container = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
`;
const GridContainer = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-columns: 48.5% 48.5%;
  grid-gap: 1rem;
`;
const GridViewButton = styled(Button)``;
const Window = styled.div`
  height: 15rem;
  border: 1px solid ${(props) => props.theme.palette.divider};
`;

const GridView: FunctionalComponent<Record<string, unknown>> = ({
  children,
}) => {
  const [page, setPage] = useState(1);
  return (
    <Container>
      {page}
      <GridViewButton
        onClick={() => (page != 1 ? setPage(page - 1) : null)}
      >
        <Icon size="1rem" icon={<ArrowBackwardIos />} />
      </GridViewButton>
      <GridContainer>
        {paginate<ComponentChildren>({
          elements: Array.isArray(children)
            ? children
            : Array(children),
          currPage: page - 1,
          perPage: 4,
          padToFullPage: true,
          emptyElement: <Window>pad</Window>,
        })}
      </GridContainer>
      <GridViewButton
        onClick={() =>
          Array.isArray(children) && page < children.length / 4
            ? setPage(page + 1)
            : null
        }
      >
        <Icon size="1rem" icon={<ArrowForwardIos />} />
      </GridViewButton>
    </Container>
  );
};

const paginate = <T,>({
  elements,
  currPage,
  perPage,
  padToFullPage = false,
  emptyElement,
}: {
  elements: T[];
  currPage: number;
  perPage: number;
  padToFullPage?: boolean;
  emptyElement?: T;
}): T[] => {
  const elem = elements.slice(
    currPage * perPage,
    currPage * perPage + perPage,
  );
  if (padToFullPage && elem.length < perPage) {
    return elem.fill(emptyElement, elem.length, perPage);
  }
  return elem;
};

export default GridView;
export { Window };
