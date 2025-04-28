import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entrada from './pages/ADM/Entrada';
import Login from './pages/ADM/login';
import { MainLayout } from './pages/ADM/dashboard'; // <-- mudou aqui!!

function App() {
  return (
        <BrowserRouter>
          <div style={{ height: '100vh', width: '100vw' }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/entrada" element={<Entrada />} />
              <Route path="/dashboard" element={<MainLayout />} />
            </Routes>
          </div>
        </BrowserRouter>
      );
    }
    
export default App;
