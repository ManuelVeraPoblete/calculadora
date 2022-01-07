import React, {useState} from "react"
 
export default function App() {
  let [counter, setCount] = useState(' ')  ;
  let botones = [0,1,2,3,4,5,6,7,8,9];
  let operaciones = ['+','-','/','*','=','C']

  const agrega = e => {
    switch(e.target.value) {
      case 'C':
          setCount('')
          break;
      case '=':
          try {
            const resultado = eval(counter);
            setCount(counter+e.target.value)
            setCount(counter+' = '+resultado);
          } catch(e) {
            setCount('Error en Operacion')
          }
          break;
      default:
          setCount(counter+e.target.value)
    }
  };
  const listOperaciones = operaciones.map((oper) =>
     <button className="boton" onClick={agrega} value={oper}> {oper} </button>
   );
  const listBotones = botones.map((numeros) => 
    <button className="boton" onClick={agrega} value={numeros}>{numeros}  </button>
  );
 
  return (
    <>
      
      <div className="resultado">
        <h1> {counter}</h1>
        </div>
        <div className="teclado">
        {listBotones}
        {listOperaciones}     
      </div>
    </>
  );
}