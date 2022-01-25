/** @jsx h */
import { h } from 'preact';
import HomeCard, { HalfContainer } from './components/HomeCard';
import RectButton from './components/RectButton';
import TextField from '@mui/material/TextField';
import Typography from '../../components/Typography';
import styled from 'styled-components';

const ContactStripeCard = styled(HomeCard)`
  padding: 2.5rem;
`;
const FormContainer = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
const RowContainer = styled.div`
  display: flex;
  column-gap: 1rem;
`;
const FlexTextField = styled(TextField)`
  width: 48.9%;
`;

const Contacts = () => (
  <ContactStripeCard height="35rem">
    <FormContainer>
      <Typography variant="h2" gutterBottom>
        Send an email
      </Typography>
      <RowContainer>
        <FlexTextField label="Name" variant="outlined" />
        <FlexTextField label="Address" variant="outlined" />
      </RowContainer>
      <TextField label="Subject" variant="outlined" />
      <TextField
        label="Message"
        variant="outlined"
        multiline
        rows={5}
        style={{ marginBottom: '1rem' }}
      />
      <RectButton variant="contained">send</RectButton>
    </FormContainer>
    <HalfContainer />
  </ContactStripeCard>
);

export default Contacts;
