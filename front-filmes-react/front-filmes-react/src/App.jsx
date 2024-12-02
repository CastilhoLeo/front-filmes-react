
import { useState } from 'react'
import { AppContext } from './context/AppContext'
import './App.css'
import Header from './components/Header'
import PesquisaFilme from './components/PesquisaFilme'
import FilmesSugeridos from './components/FilmesSugeridos'


function App() {
  
  
  const [pesquisa, setPesquisa] = useState('')
  const [selecionado, setSelecionado] = useState('')
  const [sugestoes, setSugestoes] = useState([])

  return (
    <>
    <Header/>
    <AppContext.Provider value={{pesquisa, setPesquisa, selecionado, setSelecionado, sugestoes, setSugestoes}}>
    <PesquisaFilme/>
    <FilmesSugeridos/>
    </AppContext.Provider>
    </>
  )
}

export default App
