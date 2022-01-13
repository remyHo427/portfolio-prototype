import * as React from 'react';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Container = styled.div`
  margin: auto;
  width: 1400px;
`;

const Header = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
`;

const HeaderTabs = styled(Tabs)`
  height: 100%;
  width: 60%;

  & > div > div {
    height: 100%;
    flex-direction: row-reverse;
  }
`;

const HeaderTab = styled(Tab)`
  height: 100%;
  width: 20%;
  font-size: 0.7rem;
`;

const SideContainer = styled.div`
  height: 100%;
  width: 20%;
`;

const Logo = styled.div`
  width: 70%;
  margin: auto;
  background-color: #1976d2;
  height: 140%;
  color: white;
  text-align: center;
  padding: 1.25rem;
  font-size: 1.25rem;
`;

const SwitchContainer = styled(SideContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

const Main = () => {
  const [tabValue, setTabValue] = React.useState(3);
  const handleChange = (e: React.MouseEvent, newValue: number) =>
    setTabValue(newValue);

  return (
    <Container>
      <Header>
        <SideContainer>
          <Logo>Logo</Logo>
        </SideContainer>
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
        <SwitchContainer>
          <LightModeIcon
            style={{ width: '0.9rem', height: '0.9rem' }}
          />
          <Switch />
          <DarkModeIcon
            style={{ width: '0.9rem', height: '0.9rem' }}
          />
        </SwitchContainer>
      </Header>
    </Container>
  );
};

export default Main;
