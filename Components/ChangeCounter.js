import { Context, useContext } from "react";
import { CounterContext } from "@/public/src/CounterContext";

export default function ChangeCounter(){
    const{counter,setCounter} = useContext(CounterContext);
    return(
        <button onClick={()=>setCounter(counter + 1 )}>Add value to counter</button>
    )
}