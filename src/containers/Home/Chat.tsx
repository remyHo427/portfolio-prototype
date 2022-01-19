/** @jsx h */
import { h } from 'preact';
import styled from 'styled-components';
import {
  StripeCard,
  TextContainer,
  HalfContainer,
  RectButton,
} from './common';
import Typography from '../../components/Typography';

const ButtonRightContainer = styled(HalfContainer)`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const Chat = () => (
  <StripeCard height="17.5rem">
    <TextContainer>
      <Typography variant="h4" gutterBottom>
        Let&apos;s have a chat!
      </Typography>
      <Typography variant="subtitle1">
        You can reach me via Discord or email, I&apos;m always happy
        to meet new people. Potential employers, fellow developers,
        graphic designers, all are welcomed! :)
      </Typography>
    </TextContainer>
    <ButtonRightContainer>
      <RectButton variant="contained">Discord</RectButton>
      <RectButton variant="contained">Email</RectButton>
    </ButtonRightContainer>
  </StripeCard>
);

export default Chat;
