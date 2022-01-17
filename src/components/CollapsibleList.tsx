/** @jsx h */
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import styled from 'styled-components';
import Typography from '../components/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Icon from './Icon';
import Divider from '@mui/material/Divider';

interface CollapsibleListProps {
  title: string;
  items: string[];
}

const Stripe = styled.div`
  padding: ${(props: { removeBottomGutter: boolean }) =>
    props.removeBottomGutter ? '1rem' : '1rem 1rem 0 1rem'};
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  width: 100%;
  padding: 0.25rem 1rem 1rem 1rem;
`;
const ListItem = styled.li`
  padding: 0.25rem;
`;

const CollapsibleList = ({ title, items }: CollapsibleListProps) => {
  const [isHidden, setHidden] = useState(true);
  return (
    <Fragment>
      <Stripe
        onClick={() => setHidden(!isHidden)}
        removeBottomGutter={isHidden}
      >
        <Typography variant="h5">{title}</Typography>
        <Icon
          size="2rem"
          icon={isHidden ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        />
      </Stripe>
      {isHidden ? null : (
        <List>
          {items.map((str, i) => (
            <ListItem key={i}>
              <Typography>{str}</Typography>
            </ListItem>
          ))}
        </List>
      )}
      <Divider />
    </Fragment>
  );
};
export default CollapsibleList;
