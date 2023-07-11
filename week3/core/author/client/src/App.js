import { Routes, Route } from 'react-router-dom'
import  Form  from './Components/Form'
import  Main from './Components/Main'
import  Update from './Components/Update'
import './App.css';


function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/new' element={<Form />} />
        <Route path='/author/edit/:id' element={<Update />} />
        
      </Routes>
      
    </div>
  );
}

export default App;