// import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter,Routes} from "react-router-dom"
import Header from "./components/Header/Header.js"
import ImageSlider from "./components/ImageSlider/ImageSlider.js" 
import Home from  "./components/Home/Home.js"
import LoginForm from './components/LoginForm/loginForm.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={ImageSlider} />
        <Route path = "/login" Component={LoginForm}/>
        <Route path="/home" Component={Home}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
