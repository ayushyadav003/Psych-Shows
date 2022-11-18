import "../styles/globals.css";
import { wrapper } from "../redux/store";
import PageLayout from "../components/PageLayout";

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default wrapper.withRedux(MyApp);
