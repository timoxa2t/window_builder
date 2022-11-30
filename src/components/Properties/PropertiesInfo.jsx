import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faSquareMinus,
} from "@fortawesome/free-regular-svg-icons";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import style from "../../css/PropertiesInfo.module.css";

export function PropertiesInfo({ details, activeComponent, chooseComponent }) {
  return (
    <Tab.Container
      defaultActiveKey={activeComponent}
      onSelect={chooseComponent}
    >
      <Nav>
        {details.map(({ key, name }) => (
          <Nav.Item key={key} className={style.nav_tab + (key === activeComponent ? " " + style.nav_tab__active: "")}>
            <Nav.Link eventKey={key}>{name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Tab.Content className={style.tab_container}>
        {details.map(({ key, name, type, properties }) => (
          <Tab.Pane eventKey={key} active={activeComponent === key} key={key}>
            <ElementInfo properties={properties} />
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
}

function ElementInfo({ properties }) {
  const getValue = (value) => {
    switch (typeof value) {
      case "boolean":
        return (
          <FontAwesomeIcon
            className={
              style.property_value +
              " " +
              style.property_icon +
              " " +
              (value ? style.checked : style.not_checked)
            }
            icon={value ? faSquarePlus : faSquareMinus}
          />
        );
      default:
        return <span className={style.property_value}>{value}</span>;
    }
  };

  return (
    <ul>
      {properties.map(({ title, value }, index) => {
        const emptyValue = value === ""
        return (
           !emptyValue && (
            <li className={style.property} key={index}>
              <Row className={style.property_row}>
                <Col sm={4}>
                  <span className={style.property_title}>{title}</span>
                </Col>
                <Col sm={8}>{getValue(value)}</Col>
              </Row>
            </li>
          )
        );
      })}
    </ul>
  );
}
