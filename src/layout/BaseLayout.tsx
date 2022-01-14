/** @jsx h @jsxFrag Fragment*/
import { h, Fragment, VNode, cloneElement } from 'preact';
import { useState } from 'preact/hooks';
import GlobalStyle from '../components/GlobalStyle';
import {
  ThemeProvider,
  darkTheme,
  lightTheme,
} from '../components/ThemeProvider';
import { GenericProps } from '../types';

const BaseLayout = ({ children }: GenericProps) => {
  const [isDark, setDark] = useState(false);

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {Array.isArray(children)
          ? (children as VNode[]).map((child, index) =>
              cloneElement(child, {
                setDark,
                isDark,
                key: index,
              }),
            )
          : cloneElement(children as VNode, {
              setDark,
              isDark,
            })}
      </ThemeProvider>
    </Fragment>
  );
};

export default BaseLayout;
