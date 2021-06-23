import './App.css';
import './Components/CurrencyConvertor';
import CurrencyConverter from './Components/CurrencyConvertor';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';
import CurrencyTable from './Components/CurrencyTable'
import CurrencyChart from './Components/CurrencyChart';

function App() {


  return (
    <div className="App">
       <Navigation/>
      <CurrencyConverter />
      <CurrencyTable />
      <CurrencyChart />
      <Footer />
    </div>
  );
}

export default App;
