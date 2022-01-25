/** @jsx h */
import { h } from 'preact';
import Typography from '../components/Typography';
import HomeCard, {
  HalfContainer,
  TextContainer,
} from '../components/HomeCard';
import RectButton from '../components/RectButton';

const Hero = () => {
  return (
    <HomeCard height="45rem">
      <TextContainer>
        <Typography variant="h5">Hello! My name is</Typography>
        <Typography
          variant="h1"
          style={{
            position: 'relative',
            left: '-8px',
            lineHeight: '6rem',
          }}
        >
          Remy Ho
        </Typography>
        <Typography variant="h6" style={{ margin: '1.5rem 0 0 0' }}>
          Front-end developer
        </Typography>
        <Typography variant="body1" gutterBottom paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt, asperiores tenetur aliquam ex illo perspiciatis
          perferendis facere pariatur officiis ipsam accusantium
          accusamus sint, obcaecati tempora? Repudiandae, dicta.
          Repudiandae, qui expedita?
        </Typography>
        <RectButton variant="contained">My projects</RectButton>
        <RectButton variant="contained">My contact</RectButton>
      </TextContainer>
      <HalfContainer />
    </HomeCard>
  );
};

export default Hero;
