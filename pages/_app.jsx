import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { getAppCookies, verifyToken } from '../middleware/utils';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { req, asPath } = ctx;

  const { token } = getAppCookies(req);
  const user = token && verifyToken(token.replace('Bearer ', ''));

  let pageProps = { user, asPath };
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }

  return { pageProps };
};

export default MyApp;
