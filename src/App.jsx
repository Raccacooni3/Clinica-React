import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Servicios from './Servicios.jsx'
import ServiciosDetalle from './ServiciosDetalle.jsx'

const Clinica = {
  title: "Clínica de Arte, Cali",
  imagen: "fotos/Logo-Clinica-de-Arte.png",
  phone: "+57 313 8901285",
  address: "Calle 16 Norte #4n-22. Apto 203, Santiago de Cali, Colombia.",
  hours: "Horarios de atención: Lunes a viernes, 9:00 AM - 6:00 PM"
}

const servicios = [
  { id: 1, title: "Restauración de pinturas", description: "Nuestro equipo de expertos en restauración de pinturas se dedica a preservar y restaurar obras de arte con técnicas avanzadas y materiales de alta calidad. Desde la limpieza y estabilización hasta la reconstrucción de áreas dañadas, nos comprometemos a devolver la belleza original a cada obra que restauramos.", 
    imagen: "fotos/WhatsApp Image 2026-05-03 Terracota 4 at 9.33.28 AM.jpeg" },

  { id: 2, title: "Restauración de esculturas", description: "Nuestro equipo de expertos en restauración de esculturas se especializa en la preservación y restauración de obras escultóricas, utilizando técnicas tradicionales y modernas para mantener su integridad y belleza.",
    imagen: "fotos/WhatsApp Image 2026-05-04 escultura marfil at 11.40.40 PM.jpeg" },
  
  { id: 3, title: "Restauración de muebles antiguos", description: "Ofrecemos servicios especializados en la restauración de muebles antiguos, conservando su valor histórico y estético mediante técnicas cuidadosas y materiales apropiados.", imagen: "fotos/WhatsApp Image 2026-05-04 mueble antiguo at 11.40.40 PM.jpeg", 
    imagen: "fotos/WhatsApp Image 2026-05-04 Popeye at 11.35.03 PM.jpeg" },
  
  { id: 4, title: "Restauración de cerámicas y porcelanas", description: "Nuestro equipo tiene experiencia en la restauración de cerámicas y porcelanas, asegurando que cada pieza sea devuelta a su estado original con la máxima precisión y calidad.", imagen: "fotos/WhatsApp Image 2026-05-04 cerámica at 11.40.40 PM.jpeg",
    imagen: "fotos/WhatsApp Image 2026-05-03 Terracota 4 at 9.33.28 AM.jpeg" }
]

function App() {
  const [servicioActivo, setServicioActivo] = useState(null)

  return (
    <div>
      <Header title={Clinica.title} imagen={Clinica.imagen} />
      <Servicios servicios={servicios} onSelect={setServicioActivo} />
      <ServiciosDetalle servicioActivo={servicioActivo} />
      <Footer phone={Clinica.phone} address={Clinica.address} hours={Clinica.hours} />
    </div>
  )
}

export default App