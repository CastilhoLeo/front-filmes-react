import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function useAppContext(){
    
    const context = useContext(AppContext)

    if (context===undefined){

        throw new Error("Não está dentro de um contexto");
    }

    return context
}
