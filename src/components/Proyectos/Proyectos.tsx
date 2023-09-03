import TarjetaProyecto from "../TarjetaProyecto/TarjetaProyecto";
import './Proyectos.css'
export default function Proyectos(){
    return(<>
    <div className="Proyectos_header">
        <h2 className="Proyectos_titulo">Mis proyectos</h2>
    </div>
        <TarjetaProyecto/>
    </>);
}