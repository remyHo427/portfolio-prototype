import * as React from 'react';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Container = styled.div`
  margin: auto;
  width: 1400px;
`;

const Header = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px black solid;
  display: flex;
`;

const HeaderTabs = styled(Tabs)`
  border: 1px blue solid;
  height: 100%;
  width: 60%;
  padding: 0 2.5rem 0 0;

  & > div > div {
    height: 100%;
    flex-direction: row-reverse;
  }
`;

const HeaderTab = styled(Tab)`
  height: 100%;
`;

const Switches = styled.div`
  border: 1px red solid;
  height: 100%;
  width: 20%;
`;

const Logo = styled.div`
  border: 1px red solid;
  height: 100%;
  width: 20%;
`;

const Main = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const handleChange = (e: React.MouseEvent, newValue: number) =>
    setTabValue(newValue);

  return (
    <Container>
      <Header>
        <Logo />
        <HeaderTabs
          value={tabValue}
          onChange={handleChange}
          aria-label="header tabs"
        >
          <HeaderTab label="Contact" />
          <HeaderTab label="Projects" />
          <HeaderTab label="About" />
          <HeaderTab label="Home" />
        </HeaderTabs>
        <Switches />
      </Header>
    </Container>
  );
};

export default Main;
