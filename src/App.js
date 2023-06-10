import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { PostList, About, UserDetails } from './pages/index';

function App() {
  
  return (
    <>
       <Header />   
        <Routes>
          <Route path='/posts' Component={PostList}/>
          <Route path='/users/:id' Component={UserDetails}/>
          <Route path='/About' Component={About}/>
          <Route path='*' Component={PostList}/>
        </Routes>
    </>
  );
}

export default App;
