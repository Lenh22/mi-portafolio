
import Nube from '../assets/img/nubeB.png';
import Nube2 from '../assets/img-parallax/cloud.svg';
import estrellas from '../assets/img-parallax/stars.svg';

export const nubesData = [
  {
    offset: 1,
    speed: 0.8,
    style: { opacity: 0.1 },
    elements: [
      { src: Nube, width: '15%', marginLeft: '55%' },
      // { src: Nube, width: '10%', marginLeft: '15%' }
    ]
  },
  {
    offset: 1,
    speed: 0.2,
    style: { opacity: 0.2 },
    elements: [
      // { src: Nube2, width: '10%', marginLeft: '10%' },
      { src: Nube, width: '15%', marginLeft: '75%' }
    ]
  },
  {
    offset: 1.6,
    speed: -0.1,
    style: { opacity: 0.4 },
    elements: [
      // { src: Nube, width: '20%', marginLeft: '60%' },
      { src: Nube, width: '20%', marginLeft: '30%' },
      // { src: Nube, width: '10%', marginLeft: '80%' }
    ]
  },
  {
    offset: 1.75,
    speed: 0.5,
    style: { opacity: 0.1 },
    elements: [
      { src: Nube2, width: '20%', marginLeft: '70%' },
      // { src: Nube, width: '20%', marginLeft: '40%' }
    ]
  },
  {
    offset: 2.6,
    speed: 0.4,
    style: { opacity: 0.6 },
    elements: [
      // { src: Nube, width: '20%', marginLeft: '5%' },
      { src: Nube2, width: '15%', marginLeft: '75%' }
    ]
  },
  {
    offset: 3,
    speed: 0.5,
    style: { opacity: 0.1 },
    elements: [
      { src: Nube, width: '15%', marginLeft: '20%' },
      // { src: Nube2, width: '20%', marginLeft: '45%' }
    ]
  },
  {
    offset: 3.2,
    speed: 0.3,
    style: { opacity: 0.6 },
    elements: [
      // { src: Nube, width: '15%', marginLeft: '10%' },
      { src: Nube2, width: '10%', marginLeft: '65%' }
    ]
  }
];

export const parallaxLayersData = [
  {
    id: 1,
    offset: 1,
    speed: 1,
    style: { backgroundColor: '#805E73' }
  },
  {
    id: 2,
    offset: 2,
    speed: 1,
    style: { backgroundColor: '#fffff' }
  },
  {
    id: 3,
    offset: 3,
    speed: 1,
    style: { backgroundColor: '#87BCDE' }
  },

];


