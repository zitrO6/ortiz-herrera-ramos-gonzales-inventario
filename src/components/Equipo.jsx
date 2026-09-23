function Equipo({ equipo }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{equipo.nombre}</h5>

        <p className="card-text">
          <strong>Marca:</strong> {equipo.marca}
        </p>

        <p className="card-text">
          <strong>Categoría:</strong> {equipo.categoria}
        </p>

        <p className="card-text">
          <strong>Precio:</strong> {equipo.precio}
        </p>

        <p className="card-text">
          <strong>Stock:</strong> {equipo.stock}
        </p>

        <p className="card-text">
          <strong>Estado:</strong>{' '}
          {equipo.estado ? 'Disponible' : 'No disponible'}
        </p>
      </div>
    </div>
  )
}

export default Equipo