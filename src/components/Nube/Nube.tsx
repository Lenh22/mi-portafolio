import 'animate.css';
import './Nube.css';
import nubeGris from '../../assets/img/nubeG.png';
import nubeBlanca from '../../assets/img/nubeB.png';
import nubeBlancaLogo from '../../assets/img/pacNubeB.png';
import { burbujasData } from '../../service/NubeData';

export default function Nube() {
  return (
    <div id="nubeLluvia" className="col animate__animated animate__fadeIn nube_animacion_edit">
      <div className="text-center d-flex justify-content-center">
        <img src={nubeGris} className="rounded" alt="NubeGris"id="nubeGris"/>
        <img src={nubeBlancaLogo}className="rounded"alt="NubeBlancaLogo"id="nubeBlanca"/>
        <img src={nubeBlanca}className="rounded desvanece"alt="NubeBlanca"id="nubeBlanca"/>
      {/* {imagenesData.map((imagen) =>(
        <img src={imagen.src}className={imagen.className} alt={imagen.id}id={imagen.id}/>
      ))} */}
      </div>
      <div id="lienzo" className="row burbujas">
      {burbujasData.map((burbuja) => (
        <div key={burbuja.id} className={burbuja.className}>
          <p>{burbuja.numero}</p>
        </div>
      ))}
      </div>
    </div>
  );
}
