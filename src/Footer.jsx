function Footer(props) {
  return (
    <footer className="p-5 min-h-37.5 w-full text-[#2C2C2C] flex flex-col items-center justify-center gap-2 text-center text-sm md:text-base">
        <a href="tel:+573138901285" className="hover:text-acento transition-colors duration-300 font-medium">
            {props.phone}
        </a>
        <p>{props.address}</p>
        <p>{props.hours}</p>
    </footer>
  )
}

export default Footer