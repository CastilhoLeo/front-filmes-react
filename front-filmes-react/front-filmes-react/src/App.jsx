
import './App.css'
import Header from './components/Header'
import PesquisaFilme from './components/PesquisaFilme'
import FilmesSugeridos from './components/FilmesSugeridos'
import AppProvider from './context/AppProvider'



function App() {
  
  
  return (
    <>
    <Header/>
    <AppProvider>
    <PesquisaFilme/>
    <FilmesSugeridos/>
    </AppProvider>
    </>
  )
}

export default App
