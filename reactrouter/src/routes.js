import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; //não precisa dar /index.js, pois por ele se chamar index é necessario apenas chamar a pasta
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

//Criando Componente de roteamento
function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/sobre' element={ <Sobre/> }/>
                <Route path='/contato' element={ <Contato/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
