import Footer from './components/Footer';
import Siderbar from './components/Siderbar';
import MadeFor from './components/MadeFor';
import Recommended from './components/Recommended';
import UpNav from './components/UpNav';
import You from './components/You';

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-zinc-50 flex flex-col overflow-hidden">
      <div className="flex flex-1">
        <Siderbar />
        <main className="flex-1 ml-[288px] p-6 overflow-y-auto h-[50%] 
        scrollbar-thumb-gray-300
        scrollbar-thin
        scrollbar-h-2">
          <UpNav />
          <Recommended/>
          <MadeFor />
          <You />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
