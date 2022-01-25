/** @jsx h @jsxFrag Fragment*/
import {
  h,
  Fragment,
  VNode,
  cloneElement,
  FunctionComponent,
} from 'preact';
import { useState } from 'preact/hooks';
import {
  ThemeProvider,
  darkTheme,
  lightTheme,
} from '../components/ThemeProvider';

const BaseLayout: FunctionComponent<Record<string, unknown>> = ({
  children,
}) => {
  const [isDark, setDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );
  return (
    <Fragment>
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
