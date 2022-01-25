/** @jsx h */
import { h } from 'preact';
import HomeCard, { HalfContainer } from '../components/HomeCard';
import Divider from '../components/Divider';
import RectButton from '../components/RectButton';
import TextField from '@mui/material/TextField';
import Typography from '../components/Typography';
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
const ContactTextField = styled(TextField)`
  width: 80%;
  margin: 0 auto;
`;

const Contacts = () => (
  <ContactStripeCard height="35rem">
    <FormContainer>
      <Typography variant="h2" gutterBottom align="center">
        Send an email
      </Typography>
      <ContactTextField label="Name" variant="outlined" />
      <ContactTextField label="Address" variant="outlined" />
      <ContactTextField label="Subject" variant="outlined" />
      <ContactTextField
        label="Message"
        variant="outlined"
        multiline
        rows={5}
        style={{ marginBottom: '1rem' }}
      />
      <RectButton variant="contained" style={{ margin: '0 auto' }}>
        send
      </RectButton>
    </FormContainer>
    <Divider flexItem orientation="vertical" />
    <HalfContainer />
  </ContactStripeCard>
);

export default Contacts;
