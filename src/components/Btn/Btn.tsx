import "./Btn.css";

interface BtnProps {
  children: string;
  link: string;
  className?: string;
  type?: "button";
}

export default function Btn({ children, link, className, type }: BtnProps) {
  return (
    <a href={link} className={` Btn_a`}>
      <button type={type} className={`${className} Btn`}>
        {children}
      </button>
    </a>
  );
}

Btn.defaultProps = {
  titulo: "Boton",
  link: "#",
  className: "Btn_2",
  children: "Boton",
};
