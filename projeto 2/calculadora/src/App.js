import './App.css';
import logoFree from './img/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [ num, setNum ] = useState(0)

  const contar = () => {
    setNum(num + 1)
  };
  const reinicarContador = () => {
    setNum(0)
  };
  
  return (
    <div className='App'>

      <div className='contenedor-logo'>
        <img
        className='logo'
        src={logoFree}
        />
      </div>

      <Contador 
      numClics={num}
      />

      <div className='contenedor-de-boton'>
        <Boton 
        texto= 'Clique para começar a contar'
        esBotonDeClic={true}
        manejarClic={contar}
        />

<Boton 
        texto= 'Apagar tudo'
        esBotonDeClic={false}
        manejarClic={reinicarContador}
        />
      </div>


    </div>
  )
}

export default App;
