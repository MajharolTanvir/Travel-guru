import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Destination from './Component/Distination/Destination';
import Login from './Component/Login/Login';
import Navbar from './Component/Navber/Navbar';
import News from './Component/News/News';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Navbar></Navbar>}></Route>
        <Route path='' element={<News></News>}></Route>
        <Route path='' element={<Destination></Destination>}></Route>
        <Route path='' element={<Blog></Blog>}></Route>
        <Route path='' element={<Contact></Contact>}></Route>
        <Route path='' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
