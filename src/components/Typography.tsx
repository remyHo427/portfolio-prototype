/** @jsx h */
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const StyledTypography = styled(Typography)`
  user-select: none;
  color: ${(props) => props.theme.palette.text.primary};
`;

export default StyledTypography;
