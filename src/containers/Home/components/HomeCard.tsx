/** @jsx h */
import { h, FunctionComponent } from 'preact';
import styled from 'styled-components';

const StripeCard = styled.div`
  width: 1400px;
  margin: auto;
  height: ${(props: { height: string }) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HalfContainer = styled.div`
  width: 50%;
  height: 100%;
`;
const TextContainer = styled.div`
  width: 50%;
  text-align: left;
`;

const HomeCard: FunctionComponent<{ height: string }> = ({
  children,
  height,
}) => <StripeCard height={height}>{children}</StripeCard>;

export default HomeCard;
export { HalfContainer, TextContainer };
