import "../styles/globals.css";
import { store } from "../redux/store";
import { wrapper } from "../redux/store";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
