import Siderbar from './components/Siderbar';
import Inicio from './pages/Inicio';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buscar from './pages/Buscar';
import Biblioteca from './pages/Biblioteca';
import UpNav from './components/UpNav';
import Playlist from './pages/Playlist';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-zinc-900 h-screen text-zinc-50 flex flex-col overflow-hidden">
        <div className="flex flex-1">
          <Siderbar />
          <main className="flex-1 md:ml-[288px] p-6 overflow-y-auto md:h-[calc(100vh-119px)] h-screen 
          scrollbar-thumb-gray-300
          scrollbar-thin
          scrollbar-h-2">
            <UpNav />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/buscar" element={<Buscar />} />
              <Route path="/biblioteca" element={<Biblioteca />} />
              <Route path="/playlist" element={<Playlist />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
