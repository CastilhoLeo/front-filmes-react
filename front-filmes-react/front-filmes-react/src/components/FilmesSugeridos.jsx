import { useContext, useEffect } from "react"
import { AppContext } from "../App"


const FilmesSugeridos = () => {

  const {selecionado, setSelecionado, sugestoes, setSugestoes} = useContext(AppContext)


  useEffect(()=>{

    if(selecionado !=''){

    const filmesSugeridos = async ()=>{
      console.log(selecionado)

     const response =  await fetch(`http://localhost:8080/sugestao/${selecionado}`)

    const sugestoes = await response.json()

    setSugestoes(sugestoes)

    }

    filmesSugeridos();



  }},[selecionado])

  
  return (
    <ul>
    {sugestoes.map((p)=>(
    <li key={p.id}>{p.original_title}</li>
    ))}
</ul>
  )
}

export default FilmesSugeridos
