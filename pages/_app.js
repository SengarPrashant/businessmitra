import '../styles/globals.scss';
import '../styles/customTheme.scss';
import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/home.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  );
}

export default MyApp
