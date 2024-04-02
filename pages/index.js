import { useCounterContext } from "@/public/src/hooks/useCounterContext";
import ChangeCounter from "@/Components/ChangeCounter";
import { useTitleColorContext } from "@/public/src/hooks/useTitleColorContext";

export default function Home() {
 
  const { color,dispatch } = useTitleColorContext();
  const {counter} = useCounterContext();
  const setTitleColor = (color)=>{
    dispatch({type:color})
  }
  return (
    <>

      <main>
        <h1 style={{ color: color }}>Counter: {counter}</h1>
        <button onClick={()=>setTitleColor("RED")}>Red</button>
        <button onClick={()=>setTitleColor("BLUE")}>Blue</button>
        <button onClick={()=>setTitleColor("")}>Purple</button>
        <ChangeCounter />
      </main>
    </>
  );
}
