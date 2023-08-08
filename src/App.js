import logo from './logo.svg';
import './App.css';
import TenantList from './components/TenantList';
import TicketList from "./components/TicketList"

function App() {
  return (
    <div>
      <TenantList/>
      <TicketList/>
    </div>
  );
}

export default App;
