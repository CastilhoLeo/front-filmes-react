import { useEffect, useState } from "react";
import RetornoPesquisa from "./RetornoPesquisa";


const PesquisaFilme = ({pesquisa, setPesquisa})=>{

    const [valorInput, setValorInput] = useState();


    const handlePesquisa = (e)=>{
        
        const valor = e.target.value

        setPesquisa(valor)

        setValorInput('')

    }

    return(
            <div>
            <label>Filme</label>
            <input type="text" onChange={handlePesquisa} value={valorInput}/>
            <RetornoPesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} setValorInput={setValorInput}/>
            </div>

    )
}



export default PesquisaFilme