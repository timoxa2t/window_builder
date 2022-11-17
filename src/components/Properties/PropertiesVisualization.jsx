import { Image } from "react-bootstrap";
import style from "../../css/PropertiesSelector.module.css";
import { getImg } from "../../utilities";

export function PropertiesVisualization({details, chooseComponent, activeComponent}) {
    
  return (
    <ul className={style.component_list}>
      {details.map(({ key, name, type }) => (
        <li
          key={key}
          className={
            style.component +
            (key === activeComponent ? " " + style.component__active : "")
          }
          onClick={() => chooseComponent(key)}
        >
          <Image className={style.component_img} src={getImg(type)} />
        </li>
      ))}
    </ul>
  );
}
