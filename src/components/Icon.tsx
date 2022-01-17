/** @jsx h */
import { h, ComponentChild, cloneElement, VNode } from 'preact';
import styled from 'styled-components';

interface IconProps {
  icon: ComponentChild;
  size: string;
}

const IconWrapper = styled.div`
  color: ${(props) => props.theme.palette.text.primary};
`;

const Icon = ({ icon, size }: IconProps) => (
  <IconWrapper>
    {cloneElement(icon as VNode, {
      style: { height: size, width: size },
    })}
  </IconWrapper>
);

export default Icon;
