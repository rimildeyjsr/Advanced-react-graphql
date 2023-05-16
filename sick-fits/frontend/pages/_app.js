import NProgress from 'nprogress';
import '../components/styles/nprogress.css';
import { Router } from 'next/router';
import Page from '../components/Page';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function myApp({ Component, pageProps }) {
  return (
    <Page>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Page>
  );
}
