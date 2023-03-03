import 'bootswatch/dist/solar/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

// import Logo from './assets/logo.png'

// IMPORT COMPONENTS
import { NavigationBar} from "./components/NavigationBar"
import { Footer} from "./components/Footer"

// IMPORT PAGES
import { Shop } from "./pages/shop/Shop"
import { Cart } from "./pages/cart/Cart"
import { AboutUs } from"./pages/about/AboutUs"
import { Home } from "./pages/home/Home"
import { ShopContextProvider } from "./context/Shop-Context"

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        < NavigationBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/shop" element={ <Shop /> } />
          <Route path="/cart" element= { <Cart /> } />
          <Route path='/about' element={ < AboutUs /> } />
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
