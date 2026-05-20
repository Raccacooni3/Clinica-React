function Servicios(props) {
  return (
    <div>
      <h2>Servicios</h2>
      <ul className="list-none p-0">
        {props.servicios.map((servicio) => (
          <li key={servicio.id}>
            <button onClick={() => props.onSelect(servicio.title)}>
              {servicio.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Servicios