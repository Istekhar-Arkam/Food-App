import './App.css';
import Cards from './components/cards';
import CardsDetails from './components/cardsDetails';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
  <Header/>
  <Routes>
    <Route  path="/" element={<Cards/>}/>
    <Route  path="/cart" element={<CardsDetails/>}/>
  </Routes>
  </>
  );
}

export default App;
