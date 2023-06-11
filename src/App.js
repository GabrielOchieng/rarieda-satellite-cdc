import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import All from './pages/all/All';
import Involved from './pages/involved/Involved';
import Work from './pages/work/Work';
import What from './pages/what/What';



function App() {
  return (
    <BrowserRouter className="black">
     <Routes>
      <Route path="/" element={<All />} />
      <Route path="/involved" element={<Involved />} />
      <Route path="/work" element={<Work />} />
      <Route path="/what" element={<What />} />
      
     </Routes>
    </BrowserRouter>
  );
}

export default App;
