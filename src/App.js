import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Home, About, UserDetails } from './pages/index';

function App() {
  
  return (
    <>
       <Header />   
        <Routes>
          <Route path='/posts' Component={Home}/>
          <Route path='/users/:id' Component={UserDetails}/>
          <Route path='/About' Component={About}/>
          <Route path='*' Component={Home}/>
        </Routes>
    </>
  );
}

export default App;
