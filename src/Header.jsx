function Header(props) {
  return (
    <header className="p-5 min-h-37.5 w-full text-[#2C2C2C] flex items-center justify-center">
      {props.imagen && (
        <img src={props.imagen} alt={props.title} className="w-16 h-16 object-cover rounded-full mr-4" />
      )}
      <h1>{props.title}</h1>
    </header>
  )
}

export default Header