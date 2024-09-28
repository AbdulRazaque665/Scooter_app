import './App.css';
import Herosection from './components/herosection/herosection';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
    <Header/>
    <Herosection/>
    <Footer/>
    </div>
  );
}

export default App;
