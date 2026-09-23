function Encabezado({ titulo, subtitulo }) {
  return (
    <div className="text-center mb-4">
      <h1>{titulo}</h1>
      <p className="text-muted">{subtitulo}</p>
    </div>
  )
}

export default Encabezado