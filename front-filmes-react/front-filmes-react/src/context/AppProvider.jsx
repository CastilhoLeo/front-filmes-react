import { useState } from "react"
import { AppContext } from "./AppContext"

AppContext

export default function AppProvider({children}){

    const [pesquisa, setPesquisa] = useState('')
  const [selecionado, setSelecionado] = useState('')
  const [sugestoes, setSugestoes] = useState([])

  return(

    <AppContext.Provider value={{pesquisa, setPesquisa, selecionado, setSelecionado, sugestoes, setSugestoes}}>
        {children}
    </AppContext.Provider>
  )
}