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
          <Route path={'/'} Component={Home}/>
          <Route path={'/UserDetails'} Component={UserDetails}/>
          <Route path={'/About'} Component={About}/>
        </Routes>
    </>
  );
}

export default App;
