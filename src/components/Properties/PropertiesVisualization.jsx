import { Container, Image } from "react-bootstrap";
import style from "../../css/PropertiesVisualization.module.css";
import { getImg } from "../../utilities";

export function PropertiesVisualization({details, chooseComponent, activeComponent, width, height}) {

  return (
    <Container className={style.visualization_container}>
      <ul className={style.component_list}>
        {details.map(({ key, name, type, thickness}) => (
          <li
            key={key}
            className={
              style.component +
              (key === activeComponent ? " " + style.component__active : "")
            }
            onClick={() => chooseComponent(key)}
          >
            <Image className={style.component_img} src={getImg(type, thickness)} />
          </li>
        ))}
      </ul>
      {width && <div className={[style.width_size, style.size].join(" ")}>
          <span>{width}</span>
      </div>
      }
      {height && <div className={[style.height_size, style.size].join(" ")}>
        <span>{height}</span>
      </div>}
    </Container>
  );
}
