import "@/styles/globals.css";
import MainContainer from "@/Components/MainContainer"
import { CounterContextProvider } from "@/public/src/context/CounterContext";
import { TitleColorContextProvider } from "@/public/src/context/TitleColorContext";
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
