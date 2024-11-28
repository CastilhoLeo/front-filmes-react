
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PesquisaFilme from './components/PesquisaFilme'

function App() {
  
  const [pesquisa, setPesquisa] = useState()


  return (
    <>
    <Header/>
    <PesquisaFilme pesquisa={pesquisa} setPesquisa={setPesquisa}/>
    </>
  )
}

export default App
