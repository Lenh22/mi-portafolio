import 'animate.css';
import "./SobreMi.css";
import FotoPerfil from "../FotoPerfil/FotoPerfil";
import Btn from '../Btn/Btn';
export default function SobreMi() {
  return (
    <div id="sobre-mi">
      <div className="Sobre_mi_container layout">
        <div className="Sobre_mi_header">
          {/* <h2 className="Sobre_mi_titulo">Sobre mi</h2> */}
          <FotoPerfil />
        </div>
        <div className="Sobre_mi_descripcion animate__animated animate__fadeIn">
          {/* <div className="fondo-desenfocado"></div> */}
          <h3 className='Sobre_mi_texto'>Leandro Alonso</h3>
          <p className='Sobre_mi_texto descripcion'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem
            cum totam aliquam, eligendi numquam ab recusandae aliquid? Ratione
            ad suscipit mollitia hic natus maiores et nihil voluptatem, beatae
            minus odit, quasi eos quam repudiandae libero accusantium quibusdam
            nisi asperiores harum atque quos aperiam consectetur! Dolorem omnis
            illo labore mollitia!
          </p>
          <Btn className='Sobre_mi_btn'>Boton</Btn>
        </div>
      </div>
    </div>
  );
}
