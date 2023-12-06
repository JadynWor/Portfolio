import logo from './logo.svg';
import './App.scss';
import { Routes } from 'react-router-dom';
import Layout from './components/Layout'

function App() {
  return (
   <Routes>
    <Routes path = "/" element = {<Layout />} />
   </Routes> 
  )
}

export default App;
