import {useCounterContext} from "@/public/src/hooks/useCounterContext";
import ChangeCounter from "@/Components/ChangeCounter";

export default function Home() {
  const {counter} = useCounterContext();
  return (
    <>
    
      <main>
        <h1>Valor:{counter}</h1>
        <ChangeCounter/>
      </main>
    </>
  );
}
