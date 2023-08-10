
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import SearchBarContainer from './components/SearchBarContainer/SearchBarContainer'
import Dashboard from './views/Dashboard/Dashboard';
import Reports from './views/Reports/Reports';
import Graphs from './views/Graphs/Graphs';
import NotFound from './views/NotFound/NotFound';

function App() {

  return (
    <>
      <div className="app-container" style={{ display: 'flex' , backgroundColor:'#202324'}}>
        <NavBar/>
        
        <div className="app-content" style={{ display: 'block'}}>
        <SearchBarContainer/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/graficas" element={<Graphs />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/reportes" element={<Reports/>} />  
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
