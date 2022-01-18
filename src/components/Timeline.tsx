/** @jsx h */
import { Fragment, h, FunctionComponent } from 'preact';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Typography from './Typography';
import { useState } from 'preact/hooks';

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
  min-height: 66.5px;
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
    margin-left: 0.25rem;
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

interface TimelineProps {
  data: {
    time: string;
    title: string;
    desc: string;
  }[];
}
interface TimelineItemProps {
  time: string;
  title: string;
  desc: string;
  index: number;
  setIndex?: React.Dispatch<React.SetStateAction<number>>;
  permanentlyHidden?: boolean;
  expand?: boolean;
}

const Timeline: FunctionComponent<TimelineProps> = ({ data }) => {
  const [expandIndex, setExpandIndex] = useState(-1);

  return (
    <TimelineContainer>
      <InnerCard>
        {data.map((item, i) =>
          i % 2 == 0 ? (
            <Fragment>
              <TimelineItem
                {...item}
                setIndex={setExpandIndex}
                index={i}
              />
              <DottedDivider dotPosition="right" />
            </Fragment>
          ) : (
            <Fragment>
              <TimelineItem
                {...item}
                index={i}
                permanentlyHidden
                expand={expandIndex == i}
              />
            </Fragment>
          ),
        )}
      </InnerCard>
      <Divider orientation="vertical" flexItem />
      <InnerCard>
        {data.map((item, i) =>
          i % 2 == 0 ? (
            <Fragment>
              <TimelineItem
                {...item}
                index={i}
                permanentlyHidden
                expand={expandIndex == i}
              />
            </Fragment>
          ) : (
            <Fragment>
              <TimelineItem
                {...item}
                setIndex={setExpandIndex}
                index={i}
              />
              <DottedDivider dotPosition="left" />
            </Fragment>
          ),
        )}
      </InnerCard>
    </TimelineContainer>
  );
};
const TimelineItem = ({
  time,
  title,
  desc,
  setIndex,
  index,
  permanentlyHidden = false,
  expand = false,
}: TimelineItemProps) => {
  const [isHidden, setHidden] = useState(true);
  return (
    <TimelineItemContainer
      onMouseEnter={() => {
        setIndex?.(index);
        !permanentlyHidden && setHidden(false);
      }}
      onMouseLeave={() => {
        setIndex?.(-1);
        !permanentlyHidden && setHidden(true);
      }}
      style={{ visibility: permanentlyHidden ? 'hidden' : 'visible' }}
    >
      <TimelineItemCard variant="outlined">
        <TimelineItemTypography variant="h5">
          {title}
        </TimelineItemTypography>
        <TimelineItemTypography variant="subtitle2">
          {time}
        </TimelineItemTypography>
        {isHidden && !expand ? null : (
          <Typography variant="body2" paragraph>
            {desc}
          </Typography>
        )}
      </TimelineItemCard>
    </TimelineItemContainer>
  );
};

export default Timeline;
