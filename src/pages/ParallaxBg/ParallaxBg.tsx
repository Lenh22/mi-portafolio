import React, { useRef } from 'react';
import './ParallaxBg.css'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import nubesData from '../../service/ParallaxData';
import parallaxLayersData from '../../service/ParallaxData';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import SobreMi from '../../components/SobreMi/SobreMi';
import Proyectos from '../../components/Proyectos/Proyectos';
import Contacto from '../../components/Contacto/Contacto';
// Little helpers ...
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function ParallaxBg() {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237',position:'absolute' }}>
      <Parallax ref={parallax} pages={4}>
      <NavBar />
    {/* Layer seccion */}
    {/* {parallaxLayersData.map((layer) => (
      <ParallaxLayer key={layer.id} offset={layer.offset} speed={layer.speed} factor={layer.factor}style={layer.style}
      />
    ))} */}
    {/* Pequeños iconos */}
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>
    {/* Nubes */}
        {/* {nubesData.map((nube, index) => (
          <ParallaxLayer key={index} offset={nube.offset} speed={nube.speed} style={nube.style}>
            {nube.elements.map((element: { src: string | undefined; width: any; marginLeft: any; }) => (
          <img src={element.src} style={{ display: 'block', width: element.width, marginLeft: element.marginLeft }} />
            ))}
          </ParallaxLayer>
        ))} */}
    {/* Mundo */}
        <ParallaxLayer
          offset={3.5}
          speed={-0.4}
          className='Parallax_earth '>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

    {/* pag 0 */}
        <ParallaxLayer id='inicio'  offset={0} speed={0.1} onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <img src={url('server')} style={{ width: '20%' }} /> */}
          <Header/>
        </ParallaxLayer>
    {/* pag 1 */}
        <ParallaxLayer id='sobre-mi' offset={1} speed={0.1} onClick={() => parallax.current.scrollTo(2)}
         className='Parallax_page_center'>
          {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
          <SobreMi/>
        </ParallaxLayer>
    {/* pag 2 */}
        <ParallaxLayer id='proyectos'  offset={2} speed={0.2} onClick={() => parallax.current.scrollTo(3)}
          className='Parallax_page_center'>
          {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
          <Proyectos/>
        </ParallaxLayer>
    {/* pag 3 */}
        <ParallaxLayer offset={3} speed={-0} onClick={() => parallax.current.scrollTo(0)}
          className='Parallax_page_center'>
          {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
          <Contacto/>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
