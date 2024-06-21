
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './form/Form';
import Confirm from './form/Confirm';
import Submit from './form/Submit';

function App() {
  return (
    <Routes>
      <Route path='/' element={<div className="mainWrapper">
      <Form/>
    </div>}/>
    <Route path='/confirm' element={<Confirm/>}/>
    <Route path='/submit' element={<Submit/>}/>
    </Routes>
    
  );
}

export default App;
