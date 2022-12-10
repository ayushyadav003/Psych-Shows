import "../styles/globals.css";
import { wrapper } from "../redux/store";
import PageLayout from "../components/PageLayout";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </PageLayout>
  );
}

export default wrapper.withRedux(MyApp);
