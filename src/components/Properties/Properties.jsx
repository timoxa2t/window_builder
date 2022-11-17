
import { Col, Image, Row } from "react-bootstrap";
import style from "../../css/PropertiesSelector.module.css";
import flare from "../../img/flare.png";

export function Properties({ children, chooseComponent }) {


  const [leftSide, rightSide] = children

  return (
    <Row className={style.container}>
      <Col className={style.visual_side}>
        <Image className={style.flare} src={flare} />      
        {leftSide}
      </Col>
      <Col>
        {rightSide}
      </Col>
    </Row>
  );
}
