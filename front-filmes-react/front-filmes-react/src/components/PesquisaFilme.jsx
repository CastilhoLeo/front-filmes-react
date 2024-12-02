import {  useState } from "react";
import RetornoPesquisa from "./RetornoPesquisa";
import useAppContext from "../hooks/useAppContext";


const PesquisaFilme = ()=>{

    const [selecao, setSelecao] = useState(false)

    const {pesquisa, setPesquisa, selecionado, setSelecionado} = useAppContext()



    const handlePesquisa = (e)=>{

        setSelecao(false)
       
        const valor = e.target.value

        setPesquisa(valor)

    }

    return(
            <div>
            <label>Filme</label>
            <input type="text" onChange={handlePesquisa} value={pesquisa}/>
            <RetornoPesquisa selecao={selecao} setSelecao={setSelecao}/>
            </div>

    )
}



export default PesquisaFilme