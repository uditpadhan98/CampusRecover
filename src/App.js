import './App.css';
import Footer from './components/Footer';
import { FoundPage } from './components/FoundPage';
import Home from './components/Home';
import { LostPage } from './components/LostPage';
import { LostData } from './components/LostData';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { FoundData } from './components/FoundData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/missing' element={<LostPage/>}/>
        <Route path='/found' element={<FoundPage/>}/>
        <Route path='/lost-form' element={<LostData/>}/>
        <Route path='/found-form' element={<FoundData/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      <Footer/>
    </div>
  );
}

export default App;
