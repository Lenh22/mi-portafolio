export interface BtnProps {
  children: string;
  link?: string;
  className?: string;
  onClick?: () => void;
}

export interface BtnCvProps extends BtnProps {
  icon: string;
}
