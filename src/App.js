import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Home from './components/Home';
function App() {
  return (
    <div className="">
    
 <Routes>
  <Route path='/' element={<Home></Home>}> </Route>
 </Routes>
 <Toaster></Toaster>
    </div>
  );
}

export default App;
