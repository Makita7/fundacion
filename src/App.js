import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

/* COMPONENTS */
import Header from './components/Header';
import Footer from './components/Footer';

/* STYLES */
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

/* PAGES */
import SomosSuyas from './pages/SomosSuyas';
import NuestrasActividades from './pages/NuestrasActividades';
import Inicio from './pages/Inicio';
import Talleres from './pages/Talleres';
import Escuelas from './pages/Escuela';
import MejorEsDar from './pages/MejorEsDar';
import Donaciones from './pages/Donaciones';
import Noticias from './pages/Noticias';
import Error from './pages/Error';



function App() {
  return (
    <div className="">
      <Router>

        <Header />

        <Routes>

          <Route path='/' element={<Inicio/>} />

          <Route path='/nuestrasactividades' element={<NuestrasActividades/>} />

          <Route path='/atualcance' element={<Talleres/>} />

          <Route path='/escuela' element={<Escuelas/>} />

          <Route path='/somossuyas' element={<SomosSuyas/>} />

          <Route path='/mejoresdar' element={<MejorEsDar/>} />

          <Route path='/donaciones' element={<Donaciones/>} />
          
          <Route path='/noticias' element={<Noticias/>} />

          <Route path='/error' element={<Error/>} />

        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
