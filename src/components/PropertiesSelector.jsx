import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import style from "../css/PropertiesSelector.module.css";
import flare from "../img/flare.png";
import glass_12 from "../img/glass_12.png";
import camera from "../img/camera.png";
import { useState } from "react";
import { PropertiesForm } from "./PropertiesForm";
import options from "../options.json";

const GLASS = "type_glass";
const SPACER = "type_spacer";
const FILM = "type_film";

const allProperties = {
    [GLASS]: getProperties(options.glass),
    [SPACER]: getProperties(options.spacer),
    [FILM]: getProperties(options.film),
}

export function PropertiesSelector() {
  const [component, setComponent] = useState(details[0].key);

  const chooseComponent = (key) => {
    setComponent(key);
  };

  return (
    <Row className={style.container}>
      <Col className={style.visual_side}>
        <Image className={style.flare} src={flare} />
        <ul className={style.component_list}>
          {details.map(({ key, name, type }) => (
            <li
              key={key}
              className={
                style.component +
                (key === component ? " " + style.component__active : "")
              }
              onClick={() => chooseComponent(key)}
            >
              <Image className={style.component_img} src={getImg(type)} />
            </li>
          ))}
        </ul>
      </Col>
      <Col>
        <Tab.Container defaultActiveKey={component} onSelect={chooseComponent}>
          <Nav>
            {details.map(({ key, name }) => (
              <Nav.Item key={key}>
                <Nav.Link eventKey={key}>{name}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Tab.Content className={style.tab_container}>
            {details.map(({ key, name, type }) => (
              <Tab.Pane eventKey={key} active={component === key} >
                <PropertiesForm properties={allProperties[type]} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Col>
    </Row>
  );
}

function getImg(type) {
  switch (type) {
    case GLASS:
      return glass_12;
    case SPACER:
      return camera;
  }
}

const details = [
  {
    key: "glass_1",
    name: "Скло 1",
    type: GLASS,
  },
  {
    key: "spacer_1",
    name: "Камера 1",
    type: SPACER,
  },
  {
    key: "glass_2",
    name: "Скло 2",
    type: GLASS,
  },
  {
    key: "spacer_2",
    name: "Камера 2",
    type: SPACER,
  },
  {
    key: "glass_3",
    name: "Скло 3",
    type: GLASS,
  },
];

function getFilters(options) {
  const allFilters = new Map();
  options.forEach(({ title, filters }) => {
    if(!filters) return 
    Object.entries(filters).forEach(([key, value]) => {
      allFilters.set(
        key,
        allFilters.has(key) ? allFilters.get(key).add(value) : new Set([value])
      );
    });
  });
  return allFilters
}

function getProperties(props){
    const propsWithOptions = props.filter(item => item.hasOwnProperty("options"))
    const propsWithoutOptions = props.filter(item => !item.hasOwnProperty("options"))
    const allFilters = propsWithOptions.reduce((acc, {options}) => new Map([...acc, ...getFilters(options)]), new Map)
    const propsWithAddedOptions = propsWithoutOptions.map(item => {
        if(allFilters.has(item.name)) {
            item.options = [...allFilters.get(item.name)]
        }
        return item
    })

    return [...propsWithAddedOptions, ...propsWithOptions].sort((a, b) => a.order - b.order)
}