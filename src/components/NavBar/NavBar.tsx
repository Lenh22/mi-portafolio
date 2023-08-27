import './NavBar.css';
import nube from '../../assets/img/nube-navbar.svg';
import { BsPinAngleFill, BsPinAngle} from 'react-icons/bs';

import { useState } from 'react';

interface NavBarProps {
  parallax: React.RefObject<any>;
}

const NavBar: React.FC<NavBarProps> = ({ parallax }) => {
  const [navbarUp, setNavbarUp] = useState('');
  
  const scrollToPage = (pageIndex: number) => {
    parallax.current.scrollTo(pageIndex);
  };

  const scrollUp = () => {
    if(navbarUp==''){
      setNavbarUp('Navbar_up')
    }
    else setNavbarUp('');
  };
  const PinIcon = navbarUp === '' ? BsPinAngleFill : BsPinAngle;
  return (
    <div className={`Navbar_container ${navbarUp}`}>
      <nav className="Navbar">
        <div className='Navbar_listado'>
          <p onClick={() => scrollToPage(0)}>Inicio</p>
          <p onClick={() => scrollToPage(1)}>Sobre Mi</p>
          <p onClick={() => scrollToPage(2)}>Proyecto</p>
          <p onClick={() => scrollToPage(3)}>Contacto</p>
        </div>
          <div className='Navbar_boton' onClick={scrollUp}><PinIcon/></div>
        <div className='Navbar_nube_container'>
          <img className='Navbar_nube' src={nube} alt='navbar'/>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
