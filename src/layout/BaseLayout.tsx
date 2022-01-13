import * as React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import {
  ThemeProvider,
  darkTheme,
  lightTheme,
} from '../components/ThemeProvider';
import { GenericProps } from '../types';

const BaseLayout = ({ children }: GenericProps) => {
  const [isDark, setDark] = React.useState(false);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {Array.isArray(children)
          ? (children as React.ReactElement[]).map((child, index) =>
              React.cloneElement(child, {
                setDark,
                isDark,
                key: index,
              }),
            )
          : React.cloneElement(children as React.ReactElement, {
              setDark,
              isDark,
            })}
      </ThemeProvider>
    </>
  );
};

export default BaseLayout;
