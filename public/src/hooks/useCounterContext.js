import { useContext } from "react";
import { CounterContext } from "../CounterContext";

export const useCounterContext = () => {
    const context = useContext(CounterContext)
    if (!context) {
        console.log("Não existe contexto")
    }
    return context
}