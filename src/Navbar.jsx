export default function Navbar(){
    return <nav className="nav">
        
        <a href = "/" className="tituloSitio"> Dorian TV 
        <img src="./favicon.ico" height={30} alt="Logo" className="logo" />
        </a>
        <ul>
            <li className="active">
                <a href="/inicio">Inicio</a>
            </li>
            
            <li>
                <a href="/noticias">Noticias</a>
            </li>
            
            <li>
                <a href="/programacion">Programacion</a>
            </li>

            <li>
                <a href="/nosotros">Sobre nosotros</a>
            </li>

            <li>
                <a href="/contactenos">Contactenos</a>
            </li>
                
                
                
            
        </ul>

    </nav>
}