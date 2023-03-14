import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; //não precisa dar /index.js, pois por ele se chamar index é necessario apenas chamar a pasta
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

import Header from './components/Header';

//Criando Componente de roteamento
function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/sobre' element={ <Sobre/> }/>
                <Route path='/contato' element={ <Contato/> }/>
                <Route path='/produto/:id' element={ <Produto/> }/>    

                {/* Passando o path apenas como * o react router já entende que é uma pagina de erro de not found */}
                <Route path='*' element={ <Erro/> }/> 
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
