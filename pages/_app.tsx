import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppContext from "context/state";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [username, setUsername] = useState<string>("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
