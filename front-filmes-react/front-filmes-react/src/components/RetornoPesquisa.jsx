import React, { useEffect, useState } from 'react'

const RetornoPesquisa = ({pesquisa, setPesquisa}) => {

    const [retornoBusca, setRetornoBusca] = useState([])

    useEffect(()=>{

        const filmes = async ()=> {

        const response = await fetch(`http://localhost:8080/filme?filme=${pesquisa}`)

        const dados = await response.json()

        setRetornoBusca(dados)

        console.log(dados)

        }

        filmes();

    },[pesquisa])

  return (
   
    <datalist id='buscaFilmes'>
        {retornoBusca.map((p)=>(
        <option key={p.id} value={p.original_title}></option>
        ))}
    </datalist>
    
  )
}

export default RetornoPesquisa
