import logo from './logo.svg';
import './App.css';
import Comentarios from '../src/componetes/comentários/dados-comentarios.js'

export default function App() {
  return (
    <div className="App">

      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Comentarios />

      
    </div>
  );
}