function Servicios(props) {
  return (
    <div>
      <h2>Servicios</h2>
      <ul>
        {props.servicios.map((servicios) => (
          <li key={servicios.id}>{servicios.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Servicios