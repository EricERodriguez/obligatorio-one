
import './App.css';
import Campos from './Campos';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Campos nombre="Apellido"/>
      <Campos nombre="Email"/>
      <Campos nombre="Telefono"/>
      <Campos nombre="Password"/>
      <Campos nombre="Confirmar password"/>
      <Footer/>
    </div>
  );
}

export default App;
