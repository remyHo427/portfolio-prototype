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
  grid-template-columns: ${(props: { bigWindow: boolean }) =>
    props.bigWindow ? '100%' : '48.5% 48.5%'};
  grid-gap: ${(props: { bigWindow: boolean }) =>
    props.bigWindow ? '0px' : '1rem'};
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
const BigWindow = styled(Window)`
  height: 31rem;
`;

const GridView: FunctionalComponent<{ bigWindow?: boolean }> = ({
  children,
  bigWindow = false,
}) => {
  const [page, setPage] = useState(1);
  const perPage = bigWindow ? 1 : 4;
  const arr: ComponentChildren[] = Array.isArray(children)
    ? children
    : [children];

  return (
    <Fragment>
      <Container>
        <Button
          disabled={page == 1}
          onClick={() => setPage(page - 1)}
        >
          <Icon size="1rem" icon={<ArrowBackwardIos />} />
        </Button>
        <GridContainer bigWindow={bigWindow}>
          {bigWindow
            ? paginate({
                elements: arr,
                currPage: page - 1,
                perPage,
              })
            : paginate({
                elements: arr,
                currPage: page - 1,
                perPage,
                padToFullPage: true,
                emptyElement: <Window />,
              })}
        </GridContainer>
        <Button
          disabled={page > arr.length / perPage - 1}
          onClick={() => setPage(page + 1)}
        >
          <Icon size="1rem" icon={<ArrowForwardIos />} />
        </Button>
      </Container>
      <PageDots
        currPage={page}
        totalPage={Math.ceil(arr.length / perPage) || 1}
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
    for (let i = elem.length; i <= perPage; i++) {
      elem[i] = emptyElement;
    }
    return elem;
  }
  return elem;
};

export default GridView;
export { Window, BigWindow };
