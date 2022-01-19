/** @jsx h */
import { h, FunctionComponent } from 'preact';
import Link from '../components/Link';
import styled from 'styled-components';
import BaseLayout from './BaseLayout';
import Switch from '@mui/material/Switch';
import Icon from '../components/Icon';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface MainLayoutProps {
  isDark?: boolean;
  setDark?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Backdrop = styled.div`
  width: 100%;
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
  height: 4rem;
  display: flex;
`;
const HeaderTabs = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: row-reverse;
`;
const HeaderTab = styled(Link)`
  display: inline-block;
  height: 100%;
  padding: 2rem;
  width: 20%;
  font-size: 1rem;
`;
const SideContainer = styled.div`
  height: 100%;
  width: 20%;
`;
const Logo = styled.div`
  width: 70%;
  margin: 0 auto 0 0;
  background-color: #1976d2;
  height: 150%;
  text-align: center;
  padding: 2rem;
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

const MainLayoutChild: FunctionComponent<MainLayoutProps> = ({
  children,
  setDark,
  isDark,
}) => {
  return (
    <Backdrop>
      <Container>
        <Header>
          <SideContainer>
            <Logo>Logo</Logo>
          </SideContainer>
          <HeaderTabs>
            <HeaderTab href="/contact">Contact</HeaderTab>
            <HeaderTab href="/projects">Projects</HeaderTab>
            <HeaderTab href="/about">About</HeaderTab>
            <HeaderTab href="/">Home</HeaderTab>
          </HeaderTabs>
          <SwitchContainer>
            <Icon size="1rem" icon={<LightModeIcon />} />
            <Switch onChange={() => setDark(!isDark)} />
            <Icon size="1rem" icon={<DarkModeIcon />} />
          </SwitchContainer>
        </Header>
      </Container>
      <main>{children}</main>
    </Backdrop>
  );
};

const MainLayout: FunctionComponent<Record<string, unknown>> = ({
  children,
}) => (
  <BaseLayout>
    <MainLayoutChild>{children}</MainLayoutChild>
  </BaseLayout>
);

export default MainLayout;
