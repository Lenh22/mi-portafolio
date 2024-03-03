import "./Btn.css";
import { BtnProps } from "../../interface/IBtn";

export default function Btn({ children, link, className, onClick }: BtnProps) {
  if (link) {
    return (
      <a href={link} className={`Btn ${className}`}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={`Btn ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }
}

Btn.defaultProps = {
  className: "Btn_2",
  children: "Boton",
};
