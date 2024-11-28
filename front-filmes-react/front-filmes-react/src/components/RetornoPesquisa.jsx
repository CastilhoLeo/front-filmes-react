import React, { useEffect, useState } from 'react'

const RetornoPesquisa = ({pesquisa, setPesquisa, setValorInput}) => {

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
   
    <ul id='buscaFilmes'>
        {retornoBusca.map((p)=>(
        <li key={p.id} onClick={setValorInput(p.original_title)}>{p.original_title}</li>
        ))}
    </ul>
    
  )
}

export default RetornoPesquisa
