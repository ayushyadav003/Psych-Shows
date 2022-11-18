import "../styles/globals.css";
import { store } from "../redux/store";
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
