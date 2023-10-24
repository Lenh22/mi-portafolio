import "./Btn.css";

interface BtnProps {
  children: string;
  link: string;
  className?: string;
  type?: "button";
}

export default function Btn({ children, link, className, type }: BtnProps) {
  return (
    <a href={link} className={`${className} Btn`}>
      <button type={type}>{children}</button>
    </a>
  );
}

Btn.defaultProps = {
  titulo: "Boton",
  link: "#",
  className: "",
};
