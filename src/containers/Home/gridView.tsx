/** @jsx h */
import {
  h,
  FunctionalComponent,
  ComponentChildren,
  Fragment,
} from 'preact';
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
const PageDotContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin: 1rem 0;
`;
const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.palette.divider};
`;
const SelectedDot = styled(Dot)`
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${(props) => props.theme.palette.primary.main};
`;
const Window = styled.div`
  height: 15rem;
  border: 1px solid ${(props) => props.theme.palette.divider};
`;

const GridView: FunctionalComponent<Record<string, unknown>> = ({
  children,
}) => {
  const [page, setPage] = useState(1);
  return (
    <Fragment>
      <Container>
        <Button
          onClick={() => (page != 1 ? setPage(page - 1) : null)}
        >
          <Icon size="1rem" icon={<ArrowBackwardIos />} />
        </Button>
        <GridContainer>
          {paginate<ComponentChildren>({
            elements: Array.isArray(children)
              ? children
              : Array(children),
            currPage: page - 1,
            perPage: 4,
            padToFullPage: true,
            emptyElement: <Window />,
          })}
        </GridContainer>
        <Button
          onClick={() =>
            Array.isArray(children) && page < children.length / 4
              ? setPage(page + 1)
              : null
          }
        >
          <Icon size="1rem" icon={<ArrowForwardIos />} />
        </Button>
      </Container>
      <PageDots
        currPage={page}
        totalPage={
          Array.isArray(children) ? Math.ceil(children.length / 4) : 1
        }
      />
    </Fragment>
  );
};

const PageDots = ({
  currPage,
  totalPage,
}: Record<string, number>) => (
  <PageDotContainer>
    {Array(totalPage)
      .fill(0)
      .map((_, i) =>
        i + 1 == currPage ? <SelectedDot key={i} /> : <Dot key={i} />,
      )}
  </PageDotContainer>
);

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
    for (let i = elem.length; i < perPage; i++) {
      elem[i] = emptyElement;
    }
    return elem;
  }
  return elem;
};

export default GridView;
export { Window };
