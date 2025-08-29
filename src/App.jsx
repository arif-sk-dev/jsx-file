import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Products from './Pages/Products';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Error from './Pages/Error';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;