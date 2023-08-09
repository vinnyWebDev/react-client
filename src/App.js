import logo from './logo.svg';
import './App.css';
import TenantList from './components/TenantList';
import TicketList from "./components/TicketList"
import TenantForm from './components/TenantForm';
import TicketForm from './components/TicketForm';
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<TenantList />}></Route>
            <Route exact path="/tenantform" element={<TenantForm />}></Route>
            <Route exact path="/ticketlist" element={<TicketList />}></Route>
            <Route exact path="/ticketform" element={<TicketForm />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
