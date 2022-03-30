import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Main from './pages/Main'
import Repositorio from './pages/Repositorio'


const Rotas = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route exact path='/repositorio/:repositorio' element={<Repositorio />} />
            </Routes>
        </Router>
    )
}


export default Rotas