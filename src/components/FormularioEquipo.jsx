import { useState } from 'react'

function FormularioEquipo({ agregarEquipo }) {
  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [categoria, setCategoria] = useState('')
  const [precio, setPrecio] = useState('')
  const [stock, setStock] = useState('')
  const [estado, setEstado] = useState(true)
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState(false)

  const manejarSubmit = (e) => {
    e.preventDefault()

    if (
      nombre.trim() === '' ||
      marca.trim() === '' ||
      categoria === '' ||
      Number(precio) <= 0 ||
      stock === '' ||
      Number(stock) < 0
    ) {
      setMensaje('Complete correctamente los campos obligatorios.')
      setError(true)
      return
    }

    const nuevoEquipo = {
      nombre,
      marca,
      categoria,
      precio: Number(precio),
      stock: Number(stock),
      estado
    }

    agregarEquipo(nuevoEquipo)

    setMensaje('Equipo registrado correctamente.')
    setError(false)

    setNombre('')
    setMarca('')
    setCategoria('')
    setPrecio('')
    setStock('')
    setEstado(true)
  }

  return (
    <div className="card p-4 mb-4">
      <h2 className="mb-3">Registrar equipo</h2>

      {mensaje && (
        <div className={error ? 'alert alert-danger' : 'alert alert-success'}>
          {mensaje}
        </div>
      )}

      <form onSubmit={manejarSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Marca</label>
          <input
            type="text"
            className="form-control"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Categoría</label>
          <select
            className="form-select"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Seleccione una categoría</option>
            <option value="Laptop">Laptop</option>
            <option value="Monitor">Monitor</option>
            <option value="Periférico">Periférico</option>
            <option value="Impresora">Impresora</option>
            <option value="Red">Red</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Estado</label>
          <select
            className="form-select"
            value={estado.toString()}
            onChange={(e) => setEstado(e.target.value === 'true')}
          >
            <option value="true">Disponible</option>
            <option value="false">No disponible</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar equipo
        </button>
      </form>
    </div>
  )
}

export default FormularioEquipo