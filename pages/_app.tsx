import ReactGA from "react-ga";
import { useEffect } from "react";
import { useRouter } from "next/router";

ReactGA.initialize("UA-203132889-1");

import "../styles/styles.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    ReactGA.pageview(window?.location?.href);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
