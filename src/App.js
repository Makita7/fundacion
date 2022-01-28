import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

/* COMPONENTS */
import Header from './components/Header';

/* STYLES */
import './App.css';
import 'bulma/css/bulma.css';

/* PAGES */
import SomosSuyas from './pages/SomosSuyas';
import Inicio from './pages/Inicio';
import QuienSomos from './pages/QuienSomos';
import Talleres from './pages/Talleres';
import Escuelas from './pages/Escuela';
import MejorEsDar from './pages/MejorEsDar';
import Donaciones from './pages/Donaciones';
import Error from './pages/Error';



function App() {
  return (
    <div className="container pt-6">
      <Router>

        <Header />

        <Routes>

          <Route path='/' element={<Inicio/>} />

          <Route path='/quienessomos' element={<QuienSomos/>} />

          <Route path='/talleres' element={<Talleres/>} />

          <Route path='/escuela' element={<Escuelas/>} />

          <Route path='/somossuyas' element={<SomosSuyas/>} />

          <Route path='/mejoresdar' element={<MejorEsDar/>} />

          <Route path='/donaciones' element={<Donaciones/>} />

          <Route path='/error' element={<Error/>} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
