import { useState } from 'react';
import { NovaDenuncia } from './Pages/novaDenuncia';
import Login from './Pages/login';  // Remova as chaves {}
import { MainLayout } from './Pages/dashboard';
import { Sidebar } from './Components/Sidebar';
import { DenunciaRecentes } from './Components/DenunciasRecentes';
import { DenunciaRec } from './Pages/DenunciaRec';

function App() {
  return <DenunciaRec />;
}

export default App;