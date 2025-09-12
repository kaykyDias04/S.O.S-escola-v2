import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/ADM/login';
import {MainLayout} from './pages/ADM/dashboard'; // <- sem { } se for export default
import { DenunciaRec } from './pages/ADM/DenunciaRec';
import { Relatorio } from './pages/ADM/relatorio';
import { Encaminhamento } from './pages/ADM/Encaminhamento';
import { NovaDenuncia } from './pages/Aluno/NovaDenuncia';
import LoginMatricula from './pages/Aluno/LoginAluno';
import { InicialPag } from './pages/Aluno/InicialAluno';
import { ProtocoloDen } from './Components/Aluno/protocoloDec';
import { MinhaDenunciass } from './pages/Aluno/MinhasDenuncias';
import { PsicologiaPag } from './pages/Aluno/Psicologiapag';
import Homepage from './pages/homepage';
function App() {
  return (
    <BrowserRouter>
      <div className='h-full w-full'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login-professor" element={<Login />} />
          <Route path="/dashboard" element={<MainLayout />} />
          <Route path="/denunciarec" element={<DenunciaRec />} />
          <Route path="/relatorioeestatistica" element={<Relatorio />} />
          <Route path="/encaminhamento" element={<Encaminhamento />} />
          <Route path="/nova-denuncia" element={<NovaDenuncia />} />
          <Route path="/login-aluno" element={<LoginMatricula />} />
          <Route path="/inicial-pag" element={<InicialPag />} />
          <Route path ="/protocolo" element={<ProtocoloDen />} />
          <Route path="/minhas-denc" element={<MinhaDenunciass />} />
          <Route path="/psi" element={<PsicologiaPag />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
