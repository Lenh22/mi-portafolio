import './FotoPerfil.css'
import foto from '../../assets/img/fotoLen2023.9.jpg';
export default function FotoPerfil() {
  return (
    <div className="Foto_perfil_container">
      <div className="Foto_perfil_img_container">
        <img className='Foto_perfil_img' src={foto} alt="Fotoperfil_img"></img>
      </div>
    </div>
  );
}
