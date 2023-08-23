import { useRef } from 'react';
import './NavBar.css';
import { IParallax } from '@react-spring/parallax';

interface NavBarProps {
  parallax: React.RefObject<any>;
}

const NavBar: React.FC<NavBarProps> = ({ parallax }) => {
  const scrollToPage = (pageIndex: number) => {
    parallax.current.scrollTo(pageIndex);
  };

  return (
    <div className="Navbar_container">
      <nav className="Navbar">
        Esto es el Navbar
        <ul>
          <li><a onClick={() => scrollToPage(0)}>Inicio</a></li>
          <li><a onClick={() => scrollToPage(1)}>Sobre Mi</a></li>
          <li><a onClick={() => scrollToPage(2)}>Proyecto</a></li>
          <li><a onClick={() => scrollToPage(3)}>Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
