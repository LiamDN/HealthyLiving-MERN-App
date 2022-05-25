import './App.css';
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Home from './components/general/Home'
import OnTheMenu from './components/general/OnTheMenu';
import Login from './components/user/Login'
import Registration from './components/user/Registration'
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/on-the-menu" element={<OnTheMenu />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/registration" element={<Registration />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
