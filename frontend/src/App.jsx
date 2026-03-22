import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarMain from './components/navbar-main';
import GeneroView from './pages/genero-view';
import DirectorView from './pages/director-view';
import ProductoraView from './pages/productora-view';
import TipoView from './pages/tipo-view';
import MediaView from './pages/media-view';

const App = () => {
  return (
    <>
      <NavbarMain />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <div className="text-center mt-5">
              <h1 className="display-4 font-monospace fw-bold text-primary">CINEMA CMS</h1>
              <p className="lead">Sistema Profesional de Gestión Documental para el Séptimo Arte.</p>
              <hr className="w-25 mx-auto" />
            </div>
          } />
          <Route path="/generos" element={<GeneroView />} />
          <Route path="/directores" element={<DirectorView />} />
          <Route path="/productoras" element={<ProductoraView />} />
          <Route path="/tipos" element={<TipoView />} />
          <Route path="/medias" element={<MediaView />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
