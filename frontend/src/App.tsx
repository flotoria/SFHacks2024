
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/authContext/authContext';
import HomePage from './pages/Login';
import SignUp from './pages/SignUp'
import Inbox from './pages/Inbox'
import Dashboard from './pages/Dashboard'
import MyListing from '../src/pages/MyListing'
import RentOutForm from './pages/RentOutForm';
import Layout from './components/Layout';
import FindOutMore from './pages/FindOutMore';
function App() {
  return (
    <AuthProvider>
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<HomePage />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Dashboard />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/mylistings" element={<MyListing/>} />
            <Route path="/rentout" element={<RentOutForm/>} />
            <Route path="/findoutmore" element={<FindOutMore/>} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </AuthProvider>
  );
}

export default App;
