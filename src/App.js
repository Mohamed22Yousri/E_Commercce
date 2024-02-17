import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Shop from './components/pages/Shop'
import ShopCategory from './components/pages/ShopCategory';
import Prodcut from './components/pages/Prodcut'
import Cart from './components/pages/Cart'
import LoginSignUp from './components/pages/LoginSignUp'
import Footer from './components/Footer/Footer';
import banner_men from './components/Assets/banner_mens.png'
import banner_women from './components/Assets/banner_women.png'
import banner_kids from './components/Assets/banner_kids.png'

function App() {
  return (
      <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element ={<Shop/>}/>
              <Route path='/mens' element={<ShopCategory category="men" banner={banner_men}/>}/>
              <Route path='/womens' element={<ShopCategory category="women" banner={banner_women}/>}/>
              <Route path='/kids' element={<ShopCategory category="kid" banner={banner_kids}/>}/>
              <Route path='/prodcut' element={<Prodcut/>}>
              <Route path=':prdocutId' element={<Prodcut/>}/>
              </Route>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignUp/>}/>
            </Routes>
            <Footer/>
      </BrowserRouter>

  );
}

export default App;
