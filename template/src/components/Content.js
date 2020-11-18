import { Fragment } from 'react';
import tw, { css } from 'twin.macro';

// images
import logo from '../logo.svg';

// Keyframes
const animationLogo = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

// Styled Components
const Paragraph = tw.p`text-3xl font-medium text-white`;
const LinkGroup = tw.div`flex`;
const Link = tw.a`text-xl text-blue-200 hover:text-blue-300 font-medium mx-4 cursor-pointer transition-all ease-in duration-300`;

const Content = () => {
  return (
    <Fragment>
      <img
        src={logo}
        alt="React Logo"
        css={[
          tw`pointer-events-none`,
          css`
            animation: ${animationLogo} infinite 20s linear;
            height: 50vmin;
          `
        ]}
      />
      <Paragraph>React.js with TailwindCSS & Emotion</Paragraph>
      <LinkGroup>
        <Link
          href="https://github.com/angel-codes/cra-template-tailwindcss-emotion"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </Link>
        <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </Link>
      </LinkGroup>
    </Fragment>
  );
};

export default Content;
