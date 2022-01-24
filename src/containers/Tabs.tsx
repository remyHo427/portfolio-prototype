/** @jsx h */
import { h, FunctionComponent } from 'preact';
import styled from 'styled-components';
import Typography from '../components/Typography';

const TabsContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: row-reverse;
`;
const Tab = styled.a`
  display: inline-block;
  height: 100%;
  width: 20%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tabs: FunctionComponent<{
  data: { href: string; label: string }[];
}> = ({ data }) => (
  <TabsContainer>
    {data.map(({ href, label }, i) => (
      <Tab key={i} href={href}>
        <Typography>{label}</Typography>
      </Tab>
    ))}
  </TabsContainer>
);
export default Tabs;
