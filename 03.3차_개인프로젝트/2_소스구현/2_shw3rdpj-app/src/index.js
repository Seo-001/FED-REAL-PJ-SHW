import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './3rdpj/Main';
import Layout from './3rdpj/Layout';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Introduce from './3rdpj/Introduce';
import About from './3rdpj/About';
import Partners from './3rdpj/Partners';
import Work from './3rdpj/Work';
import News from './3rdpj/News';
import Shop from './3rdpj/Shop';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='intro' element={<Introduce />} />
          <Route path='ab' element={<About />} />
          <Route path='pt' element={<Partners />} />
          <Route path='wo' element={<Work />} />
          <Route path='nw' element={<News />} />
          <Route path='sp' element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
