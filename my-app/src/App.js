import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Tasks from './components/Tasks';

function App() {
  
  return (
    <div className="container-fluid p-4">
      <div className="row g-4">
        <Sidebar />
        <div className="col">
          <Topbar />
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default App;
