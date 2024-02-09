import logo from './logo.svg';
import './App.css';
import "./component/style.css"

import Home from './component/home';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './component/store';
import Teahome from './component/teahome';
import Cartpage from './component/cartpage';
import Productdetails from './component/productdetails';
import Productdetailspage from './component/productdetailspage';
import Buynow from './component/buynow';
import Fruithome from './component/fruitshome';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tea' element={<Teahome/>} />
                    <Route path='/fruits' element={<Fruithome/>} />
                    <Route path='/cart' element={<Cartpage />} />
                    <Route path='/productdetails' element={<Productdetailspage/>} />
                    <Route path='/buynow' element={<Buynow/>} />
                </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
