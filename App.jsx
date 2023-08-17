import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [card, setCard] = useState(false);
  const [error, setError] = useState("");

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeApellido = (e) => setApellido(e.target.value);

  const handlerForm = (e) => {
    e.preventDefault();

    if (nombre.length < 3 || nombre.includes(" ") || apellido.length < 6 ){
      setError("Por favor chequea que la información sea correcta")
      setCard(false);
    } else {
      setCard(true);
      setError("");
    }
  }

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form onSubmit={handlerForm}>
        <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={onChangeNombre}/>
        <input type="text" placeholder="Ingrese su apellido" value={apellido} onChange={onChangeApellido}/>
        <button type="submit">Registrar</button>
      </form>
      <Card nombre={nombre} apellido={apellido}/>
    </div>
  )
}

export default App
