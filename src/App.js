import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'

function App() {

  return (
    <div className="App">
      <h1>Olá mundo!</h1>
      <SayMyName name='Kaio'/>
      <Pessoa nome='Kaio' idade='18' profissão='Estudante' foto='https://placekitten.com/200/200' />
      <Frase/>
    </div>
  );
}

export default App;
