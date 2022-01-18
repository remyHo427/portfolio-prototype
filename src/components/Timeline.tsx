/** @jsx h */
import { Fragment, h } from 'preact';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Typography from './Typography';

const TimelineContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;
const InnerCard = styled.div`
  width: 50%;
`;
const TimelineItemContainer = styled.div`
  width: 100%;
  height: 66.5px;
`;
const TimelineItemCard = styled(Card)`
  width: 90%;
  height: 100%;
  margin: auto;
  padding: 1rem;
`;
const TimelineItemTypography = styled(Typography)`
  display: inline-block;
  & + & {
    margin-left: 1rem;
  }
`;
const DottedDivider = styled(Divider)`
  height: 0px;
  border-color: rgba(0, 0, 0, 0);

  &::after {
    position: relative;
    top: -0.5rem;
    left: ${(props: { dotPosition: 'left' | 'right' }) =>
      ({ left: '-0.5rem', right: 'calc(96% + 0.45rem)' }[
        props.dotPosition
      ])};
    content: 'a';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-color: ${(props) => props.theme.palette.divider};
    color: rgba(0, 0, 0, 0);
    border-radius: 100%;
  }
`;

const data = [
  { time: '2021-01-01', legend: 'item1' },
  { time: '2021-01-02', legend: 'item2' },
  { time: '2021-01-03', legend: 'item3' },
  { time: '2021-01-04', legend: 'item4' },
];

const Timeline = () => {
  return (
    <TimelineContainer>
      <InnerCard>
        {data.map((c, i) =>
          i % 2 == 0 ? (
            <Fragment>
              <DottedDivider dotPosition="right" />
              <TimelineItem />
            </Fragment>
          ) : (
            <TimelineEmptyItem />
          ),
        )}
      </InnerCard>
      <Divider orientation="vertical" flexItem />
      <InnerCard>
        {data.map((c, i) =>
          i % 2 == 0 ? (
            <TimelineEmptyItem />
          ) : (
            <Fragment>
              <DottedDivider dotPosition="left" />
              <TimelineItem />
            </Fragment>
          ),
        )}
      </InnerCard>
    </TimelineContainer>
  );
};
const TimelineItem = () => (
  <TimelineItemContainer>
    <TimelineItemCard variant="outlined">
      <TimelineItemTypography variant="h5">
        title
      </TimelineItemTypography>
      <TimelineItemTypography variant="subtitle2">
        2020
      </TimelineItemTypography>
    </TimelineItemCard>
  </TimelineItemContainer>
);
const TimelineEmptyItem = () => (
  <TimelineItemContainer></TimelineItemContainer>
);

export default Timeline;
