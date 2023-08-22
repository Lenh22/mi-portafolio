import React from "react";
import './Nube.css';
import nubeGris from '../../assets/img/nubeG.png';
import nubeBlanca from '../../assets/img/nubeB.png';
import nubeBlancaLogo from '../../assets/img/pacNubeB.png';

export default function Nube() {
  return (
    <div id="nubeLluvia" className="col">
      <div className="text-center d-flex justify-content-center">
        <img
          src={nubeGris}
          className="rounded"
          alt="NubeGris"
          id="nubeGris"
        />
        <img
          src={nubeBlancaLogo}
          className="rounded"
          alt="NubeBlanca"
          id="nubeBlanca"
        />
        <img
          src={nubeBlanca}
          className="rounded desvanece"
          alt="NubeBlanca"
          id="nubeBlanca"
        />
      </div>
      <div id="lienzo" className="row burbujas">
        <div className="col-2 efectoCaida burbuja absolute">
          <p>1</p>
        </div>
        <div className="col-2 efectoCaida burbuja absolute">
          <p>0</p>
        </div>
        <div className="col-2 efectoCaida burbuja absolute">
          <p>1</p>
        </div>
        <div className="col-2 efectoCaida burbuja absolute">
          <p>0</p>
        </div>
        <div className="col-2 efectoCaida burbuja absolute">
          <p>1</p>
        </div>
        <div className="col-2 efectoCaida burbuja absolute">
          <p>1</p>
        </div>
      </div>
    </div>
  );
}
