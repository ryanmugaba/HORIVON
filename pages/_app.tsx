import type { AppProps } from "next/app";
import "../styles/globals.css";
import { DisclaimerFooter } from "../components/DisclaimerFooter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Component {...pageProps} />
      <DisclaimerFooter />
    </div>
  );
}
