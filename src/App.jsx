import './App.css';
import MainApp from './pages/MainApp';
import AllProjects from './pages/AllProjects'
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainApp />} />
        <Route path='/all-projects' element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
