import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import NotFound from './NotFound';
import About from './components/About';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route path='/Portfolio' element={<Home/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
