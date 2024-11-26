import { useState } from "react";


const PesquisaFilme = ()=>{

    const [dados, setDados] = useState()

    const handleSubmit = (e)=>{

        e.preventDefault();

        console.log("formulario enviado")
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Teste</label>
            <input type="text" />
            <button type="submit">Pesquisar</button>
        </form>
    )
}



export default PesquisaFilme