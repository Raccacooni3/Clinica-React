function Servicios(props) {
  return (
    <div>
      <h2>Servicios</h2>
      <ul className="list-none p-0 flex flex-col md:flex-row gap-4 mt-4">
        {props.servicios.map((servicio) => (
          <li key={servicio.id} onClick={() => props.onSelect(servicio)} className="border border-gray-200 rounded-lg p-2.5 w-full h-75 bg-white shadow cursor-pointer">
            
            {servicio.imagen && (
              <img src={servicio.imagen} alt={servicio.title} className="w-full h-full object-cover rounded-lg" />
            )}
            <h3 className="text-lg font-bold mt-2">{servicio.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Servicios