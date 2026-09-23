import { useState } from 'react'
import Encabezado from './components/Encabezado'
import FormularioEquipo from './components/FormularioEquipo'
import Equipo from './components/Equipo'

function App() {
  const [equipos, setEquipos] = useState([])

  const agregarEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, nuevoEquipo])
  }

  return (
    <div className="container mt-4">
      <Encabezado
        titulo="Inventario Tecnológico"
        subtitulo="Control de equipos disponibles"
      />

      <FormularioEquipo agregarEquipo={agregarEquipo} />

      <h2 className="mb-3">Equipos registrados</h2>

      {equipos.length === 0 ? (
        <p>No existen equipos registrados.</p>
      ) : (
        equipos.map((equipo, index) => (
          <Equipo
            key={index}
            equipo={equipo}
          />
        ))
      )}
    </div>
  )
}

export default App