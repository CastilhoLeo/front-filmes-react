import React, {useEffect, useState } from 'react'
import useAppContext from '../hooks/useAppContext'

const RetornoPesquisa = ({selecao, setSelecao}) => {

    const [retornoBusca, setRetornoBusca] = useState([])

    const {pesquisa, setPesquisa, selecionado, setSelecionado} = useAppContext()

    useEffect(()=>{
      
        if(!selecao){

        const filmes = async ()=> {

        const response = await fetch(`http://localhost:8080/filme?filme=${pesquisa}`)

        const dados = await response.json()

        setRetornoBusca(dados)

        console.log(dados)

        }

        filmes();}
        else{

          const sugestoes = async ()=>{

            const response = await fetch(`http://localhost:8080/sugestao/${selecionado}`)

          }
        }

    },[pesquisa])



    const handleFilmeSelecionado = (f)=>{

        setPesquisa(f.original_title)

        setSelecao(true)

        setSelecionado(f.id)

        console.log(f.id)
        
    }


  return (
   
    <ul id='buscaFilmes'>
        {!selecao && retornoBusca.map((p)=>(
        <li key={p.id} onClick={()=>handleFilmeSelecionado(p)}>{p.original_title}</li>
        ))}
    </ul>
    
  )
}

export default RetornoPesquisa
