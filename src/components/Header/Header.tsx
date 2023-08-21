import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";

import styles from "./Header.module.css";

interface TrailProps {
  open: boolean;
  children: React.ReactNode;
}

const Trail: React.FC< TrailProps > = ({open,children,}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function Header() {
  const [open, set] = useState(true);
  return (
    <div className={styles.container} onClick={() => set((state) => !state)}>
      <Trail open={open}>
        <span>Hola</span>
        <span>Soy Len</span>
        <p>Tec. Desarrollo web</p>
        <span>Sit</span>
      </Trail>
    </div>
  );
}
