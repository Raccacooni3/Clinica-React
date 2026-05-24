function ServiciosDetalle(props) {
  return (
    <div className="max-w-3xl mx-auto bg-fondo p-6 rounded-lg shadow">
      {props.servicioActivo && (
        <div>
          <h3>{props.servicioActivo.title}</h3>
          <p>{props.servicioActivo.description}</p>
        </div>
      )}
    </div>
  )
}

export default ServiciosDetalle