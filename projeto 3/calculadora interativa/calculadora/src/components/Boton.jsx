import './style/boton.css'

export default function Boton({ children }){

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }
    return(
        <div className={`boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trim()}>
            {children}
        </div>
        
    )
    
}