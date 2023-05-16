import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  html {
    --red: #ff0000;
  }
`;

export default function Page({ children }) {
  return (
    <>
      <Header />
      <h1>Page</h1>
      {children}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
