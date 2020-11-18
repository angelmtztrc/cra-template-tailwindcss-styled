import { Fragment } from 'react';
import tw, { css } from 'twin.macro';

// images
import logo from '../logo.svg';

// Styled Components
const Paragraph = tw.p`text-2xl font-medium text-white`;
const Link = tw.a`text-base text-blue-200 hover:text-blue-300 font-medium mx-4 cursor-pointer transition-all ease-in duration-300`;

const Content = () => {
  return (
    <Fragment>
      <img
        src={logo}
        alt="React Logo"
        css={[
          tw`pointer-events-none animate-spin-slow`,
          css`
            height: 50vmin;
          `
        ]}
      />
      <Paragraph>ReactJS with Tailwind CSS and Styled Components</Paragraph>
      <div tw="flex mt-5">
        <Link
          href="https://github.com/angel-codes/cra-template-tailwindcss-emotion"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </Link>
        <span tw="text-blue-200">-</span>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </div>
    </Fragment>
  );
};

export default Content;
