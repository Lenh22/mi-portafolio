import { BtnCvProps } from "../../interface/IBtn";
import rocket from "../../assets/img-parallax/rocket.png"

export default function BtnCv({ icon, ...rest }: BtnCvProps) {
  return (
  <>
    <div>
    <img src={rocket} className="" alt=""/>
        <div>

        </div>
    </div>
  </>
  );
}

BtnCv.defaultProps = {
    icon: rocket,
}
