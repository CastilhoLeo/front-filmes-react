import { useEffect, useState } from "react";


const PesquisaFilme = ()=>{

    const [pesquisa, setPesquisa] = useState()
    const [retornoPesquisa, setRetornoPesquisa] = useState([])

    const handleSubmit = (e)=>{

        e.preventDefault();

        console.log("formulario enviado")
    }

    const handlePesquisa = (e)=>{
        
        const valor = e.target.value

        setPesquisa(valor)

    }

    useEffect(()=>{

        console.log(pesquisa)

    }, [pesquisa])

    return(
        <form onSubmit={handleSubmit}>
            <label>Filme</label>
            <input type="text" onChange={handlePesquisa}/>
            <datalist>
                {()=>retornoPesquisa.map((p)=>{
                    <option value={p}></option>
                    })}
            </datalist>
        </form>
    )
}



export default PesquisaFilme