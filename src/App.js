import logo from './logo.svg';
import './App.css';
import TenantList from './components/TenantList';
import TicketList from "./components/TicketList"
import TenantForm from './components/TenantForm';
import TicketForm from './components/TicketForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route exact path="/" element={<TenantList />}></Route>
          <Route exact path="/tenantform" element={<TenantForm />}></Route>
          <Route exact path="/ticketlist" element={<TicketList />}></Route>
          <Route exact path="/ticketform" element={<TicketForm />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
