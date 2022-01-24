/** @jsx h */
import { h, FunctionComponent } from 'preact';
import styled from 'styled-components';
import Typography from '../components/Typography';

const TabsContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: flex-end;
`;
const Tab = styled.a`
  display: inline-block;
  height: 100%;
  width: 20%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${(props) => props.theme.palette.primary.main};
  border-bottom: ${(props: { selected: boolean }) =>
    props.selected ? '5px solid' : 'none'};
`;

const Tabs: FunctionComponent<{
  data: { href: string; label: string }[];
}> = ({ data }) => {
  const selectedItem = localStorage.getItem('currentPage');
  return (
    <TabsContainer>
      {data.map(({ href, label }, i) => (
        <Tab
          key={i}
          href={href}
          onClick={() => localStorage.setItem('currentPage', label)}
          selected={selectedItem == label}
        >
          <Typography>{label}</Typography>
        </Tab>
      ))}
    </TabsContainer>
  );
};
export default Tabs;
