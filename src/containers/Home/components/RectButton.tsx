import Button from '../../../components/Button';
import styled from 'styled-components';

const RectButton = styled(Button)`
  height: 3rem;
  width: 25%;
  & + & {
    margin-left: 1rem;
  }
`;

export default RectButton;
