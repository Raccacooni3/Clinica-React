import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Servicios from './Servicios.jsx'

const Clinica = {
  title: "Clínica de Arte, Cali",
  phone: "+57 313 8901285",
  address: "Calle 16 Norte #4n-22. Apto 203, Santiago de Cali, Colombia.",
  hours: "Horarios de atención: Lunes a viernes, 9:00 AM - 6:00 PM"
}

const servicios = [
  { id: 1, title: "Restauración de pinturas" },
  { id: 2, title: "Restauración de esculturas" },
  { id: 3, title: "Restauración de muebles antiguos" },
  { id: 4, title: "Restauración de cerámicas y porcelanas" }
]

function App() {
  const [servicioActivo, setServicioActivo] = useState(null)

  return (
    <div>
      <Header title={Clinica.title} />
      <Servicios servicios={servicios} onSelect={setServicioActivo} />
      {servicioActivo && <p className="p-4">Mostrando: {servicioActivo}</p>}
      <Footer phone={Clinica.phone} address={Clinica.address} hours={Clinica.hours} />
    </div>
  )
}

export default App