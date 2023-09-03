import "./Btn.css";

interface BtnProps {
  titulo: string;
  link: string;
  className?: string;
  type?: "button";
}

export default function Btn({ titulo, link, className, type }: BtnProps) {
  return (
    <a href={link} className={`${className} Btn`}>
      <button type={type}>{titulo}</button>
    </a>
  );
}

Btn.defaultProps = {
  titulo: "Boton",
  link: "#",
  className: "",
};
