import * as React from 'react';
import styled from 'styled-components';
import BaseLayout from './BaseLayout';
import { GenericProps } from '../types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface MainLayoutProps extends GenericProps {
  isDark?: boolean;
  setDark?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) =>
    props.theme.palette.background.paper};
`;

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
  margin: 0 auto 0 0;
  background-color: #1976d2;
  height: 140%;
  text-align: center;
  padding: 1.25rem;
  font-size: 1.25rem;
  color: ${(props) => props.theme.palette.text.secondary};
`;

const SwitchContainer = styled(SideContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  color: ${(props) => props.theme.palette.text.secondary};
`;

const MainLayoutChild = ({
  children,
  setDark,
  isDark,
}: MainLayoutProps) => {
  const [tabValue, setTabValue] = React.useState(3);
  const handleChange = (e: React.MouseEvent, newValue: number) =>
    setTabValue(newValue);

  return (
    <Backdrop>
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
            <Switch onChange={() => setDark(!isDark)} />
            <DarkModeIcon
              style={{ width: '0.9rem', height: '0.9rem' }}
            />
          </SwitchContainer>
        </Header>
      </Container>
      <main>{children}</main>
    </Backdrop>
  );
};

const MainLayout = ({ children }: GenericProps) => (
  <BaseLayout>
    <MainLayoutChild>{children}</MainLayoutChild>
  </BaseLayout>
);

export default MainLayout;
