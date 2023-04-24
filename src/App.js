import Footer from './components/Footer';
import Siderbar from './components/Siderbar';
import MadeFor from './components/MadeFor';
import Recommended from './components/Recommended';
import UpNav from './components/UpNav';

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-zinc-50 flex flex-col">
      <div className="flex flex-1">
        <Siderbar />
        <main className="flex-1 p-6">
          <UpNav />
          <Recommended/>
          <MadeFor />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
