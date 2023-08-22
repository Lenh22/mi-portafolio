import React, { useState, useEffect } from "react";
import { useTrail, a } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import  "./Error404.css";

interface TrailProps {
  children: React.ReactNode;
}

const Trail: React.FC<TrailProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setOpen(inView); // Actualiza el estado cuando el componente entra y sale de la vista
  }, [inView]);

  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div ref={ref}>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function Error404() {
  return (
    <div className="container">
      <Trail>
        <span>ERROR 404</span>
        <span>Página no encontrada :(</span>
      </Trail>
    </div>
  );
}
