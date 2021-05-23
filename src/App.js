import './App.css';
import NavBar from './Components/NavBar';
import {Profile}  from './Components/Profile';
import './style.css';



function App() {
  return (
    <div>
      <NavBar/>
      <Profile/>
      <img src="/public/cat1.jpg" alt=""/>
      <img src="/src/cat2.jpg" alt =""/>
    </div>
  );
}

export default App;
