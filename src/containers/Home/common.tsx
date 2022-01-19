import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StripeCard = styled.div`
  width: 1400px;
  margin: 0 auto;
  height: ${(props: { height: string }) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RectButton = styled(Button)`
  height: 3rem;
  width: 25%;
  & + & {
    margin-left: 1rem;
  }
`;

export const HalfContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const TextContainer = styled.div`
  width: 50%;
  text-align: left;
`;
