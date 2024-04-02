import "@/styles/globals.css";
import MainContainer from "@/Components/MainContainer"
import { CounterContextProvider } from "@/public/src/CounterContext";
import { TitleColorContextProvider } from "@/public/src/TitleColorContext";
export default function App({ Component, pageProps }) {
  return (
    <TitleColorContextProvider>
      <CounterContextProvider>
        <MainContainer>
          <Component {...pageProps} />;
        </MainContainer>
      </CounterContextProvider>
    </TitleColorContextProvider>

  );
}
