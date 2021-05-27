import './App.css';
import './Components/CurrencyConvertor';
import CurrencyConverter from './Components/CurrencyConvertor';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';
import CurrencyChart from './Components/CurrencyChart'
function App() {


  return (
    <div className="App">
       <Navigation/>
      <CurrencyConverter />
      <CurrencyChart />
      <Footer />
    </div>
  );
}

export default App;
