
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Services from './pages/Home/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Header></Header>
        <Route path='/' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/' element={ }></Route>
        <Route path='/' element={ }></Route>
        <Route path='/' element={ }></Route> */}
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
