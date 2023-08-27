import React, { useState, useEffect } from "react";
import { useTrail, a } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import styles from "./Header.module.css";
import Nube from "../Nube/Nube";

interface TrailProps {
  children: React.ReactNode;
}

const Trail: React.FC<TrailProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setOpen(inView);
  }, [inView]);

  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 10, tension: 1000, friction: 200 }, //velocidades
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 90 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div ref={ref}>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function Header() {
  return (
    <div id={styles.inicio} className={styles.container}>
      <div className={styles.trailsText_container}>
        <Trail>
          <span>Hola,</span>
          <span>soy Len</span>
          <span className={styles.subtitulo}>Tec. Desarrollo web</span>
        </Trail>
      </div>
      <Nube />
    </div>
  );
}
