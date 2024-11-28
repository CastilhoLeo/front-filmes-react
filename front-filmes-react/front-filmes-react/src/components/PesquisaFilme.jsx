import { useEffect, useState } from "react";
import RetornoPesquisa from "./RetornoPesquisa";


const PesquisaFilme = ({pesquisa, setPesquisa})=>{


    const handlePesquisa = (e)=>{
        
        const valor = e.target.value

        setPesquisa(valor)

    }

    return(
            <div>
            <label>Filme</label>
            <input type="text" onChange={handlePesquisa} list="buscaFilmes"/>
            <RetornoPesquisa pesquisa={pesquisa} setPesquisa={setPesquisa}/>
            </div>

    )
}



export default PesquisaFilme