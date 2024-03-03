import React, { useRef } from 'react';
import './ParallaxBg.css'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import {nubesData, parallaxLayersData} from '../../service/ParallaxData.js';
import earth from '../../assets/img-parallax/earth-america.svg';
import satelite from '../../assets/img-parallax/satellite4.svg';
import estrellas from '../../assets/img-parallax/stars.svg';
import luna from '../../assets/img-parallax/moon.png';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import SobreMi from '../../components/SobreMi/SobreMi';
import Proyectos from '../../components/Proyectos/Proyectos';
import Contacto from '../../components/Contacto/Contacto';

export default function ParallaxBg() {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237',position:'absolute' }}>
      <NavBar parallax={parallax} />
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer className="Parallax_estrellas"offset={0} speed={0} factor={3}>
              <img src={estrellas} className='Parallax_estrellas' alt='estrellas' style={{height:'auto'}}/>
        </ParallaxLayer>
        <div>
      {/* Layer seccion */}
        {parallaxLayersData.map((layer) => (
          <ParallaxLayer key={layer.id} offset={layer.offset} speed={layer.speed} style={layer.style}/>
        ))}

        </div>
      {/* Pequeños iconos */}
          <ParallaxLayer offset={2.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={satelite} style={{ width: '15%', marginLeft: '70%' }} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.95} speed={-0.1} style={{ pointerEvents: 'none' }}>
          <img src={luna} style={{ width: '10%', marginLeft: '12%' }} />
          </ParallaxLayer>
      {/* Nubes */}
          {nubesData.map((nube, index) => (
            <ParallaxLayer key={index} offset={nube.offset} speed={nube.speed} style={nube.style}>
              {nube.elements.map((element: { src: string | undefined; width: any; marginLeft: any; }, index) => (
            <img key={index} src={element.src} alt={`nube-${index}`} loading="lazy" style={{ display: 'block', width: element.width, marginLeft: element.marginLeft }} />
              ))}
            </ParallaxLayer>
          ))}
      {/* Mundo */}
          <ParallaxLayer
            offset={3.5}
            speed={-0.4}
            className='Parallax_earth '>
            <img src={earth} style={{ width: '60%' }} />
          </ParallaxLayer>

      {/* pag 0 */}
      <section id='inicio'>
          <ParallaxLayer id='inicio'  offset={0} speed={0.1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Header/>
          </ParallaxLayer>
      </section>
      {/* pag 1 */}
      <section id='sobre-mi'>
          <ParallaxLayer id='sobre-mi' offset={1} speed={0.1}
          className='Parallax_page_center'>
          <img src={estrellas} className='Parallax_estrellas ' alt='estrellas' style={{height:'auto'}}/>
            <SobreMi/>
          </ParallaxLayer>
      </section>
      {/* pag 2 */}
      <section id='proyectos'>
          <ParallaxLayer id='proyectos'  offset={2} speed={0.2}
            className=''>
            <Proyectos/>
          </ParallaxLayer>
      </section>
      {/* pag 3 */}
      <section id='contacto'>
          <ParallaxLayer offset={3} speed={-0}
            className='Parallax_page_center'>
            <Contacto/>
          </ParallaxLayer>
      </section>
      </Parallax>
    </div>
  )
}
