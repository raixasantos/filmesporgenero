import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import NotificationComponent from './components/Notification';
import PaginaInicial from './pages/paginainicial';
import CadastrarFilme from './pages/cadastrarfilme';

function App() {

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<PaginaInicial></PaginaInicial>} />
        <Route path="/cadastrarfilme" element={<CadastrarFilme></CadastrarFilme>} />
      </Routes>
      <NotificationComponent />
    </BrowserRouter>
  )
}

export default App;
