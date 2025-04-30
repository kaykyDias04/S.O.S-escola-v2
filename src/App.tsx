import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entrada from './pages/ADM/Entrada';
import Login from './pages/ADM/login';
import {MainLayout} from './pages/ADM/dashboard'; // <- sem { } se for export default
import { DenunciaRec } from './pages/ADM/DenunciaRec';
import { Relatorio } from './pages/ADM/relatorio';
import { Encaminhamento } from './pages/ADM/Encaminhamento';
import { NovaDenuncia } from './pages/Aluno/NovaDenuncia';

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: '100vh', width: '100vw' }}>
        <Routes>
          <Route path="/" element={<Entrada />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<MainLayout />} />
          <Route path="/denunciarec" element={<DenunciaRec />} />
          <Route path="/relatorioeestatistica" element={<Relatorio />} />
          <Route path="/encaminhamento" element={<Encaminhamento />} />
          <Route path="/nova-denuncia" element={<NovaDenuncia />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
