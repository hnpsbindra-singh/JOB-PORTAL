import { Search } from '@mui/icons-material';
import './App.css';
import AllPosts from './components/AllPosts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/Create';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import AdminDashboard from "./components/AdminDashboard";


function App() {
  return (
  <>
   <Navbar/>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<AllPosts/>}/>
   <Route path="/AdminDashBoard" element={<AdminDashboard />} />
   <Route path="/create" element={<Create />} />
   <Route path="/edit" element={<Edit />} />
   </Routes>
   </BrowserRouter> 
  </>
  );
}

export default App;
