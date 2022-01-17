/** @jsx h */
import { h } from 'preact';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from './Typography';

interface MainTimelineProps {
  data: {
    time: string;
    legend: string;
  }[];
}
interface TimelineUnitProps {
  time: string;
  legend: string;
}

const LeftJustifiedItem = styled(TimelineItem)`
  &::before {
    flex: 0.32;
    content: '${(props: { time: string }) => props.time}';
    color: ${(props) => props.theme.palette.text.primary};
  }
`;

const TimelineUnit = ({ time, legend }: TimelineUnitProps) => (
  <LeftJustifiedItem time={time}>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography>{legend}</Typography>
    </TimelineContent>
  </LeftJustifiedItem>
);

const MainTimeline = ({ data }: MainTimelineProps) => (
  <Timeline position="right">
    {data.map(({ time, legend }, i) => (
      <TimelineUnit key={i} time={time} legend={legend} />
    ))}
  </Timeline>
);

export default MainTimeline;
