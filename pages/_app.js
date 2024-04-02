import "@/styles/globals.css";
import MainContainer from "@/Components/MainContainer"
import {CounterContextProvider} from "@/public/src/CounterContext";
export default function App({ Component, pageProps }) {
  return (
    <CounterContextProvider>
      <MainContainer>
        <Component {...pageProps} />;
      </MainContainer>
    </CounterContextProvider>
  );
}
