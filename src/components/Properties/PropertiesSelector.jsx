import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import style from "../../css/PropertiesSelector.module.css";
import flare from "../../img/flare.png";
import glass_12 from "../../img/glass_12.png";
import camera from "../../img/camera.png";
import film from "../../img/film.png";
import { useEffect, useState } from "react";
import { PropertiesForm } from "./PropertiesForm";
import options from "../../options.json";
import { useSelector } from "react-redux";

const GLASS = "type_glass";
const SPACER = "type_spacer";
const FILM = "type_film";

const allProperties = {
    [GLASS]: getProperties(options.glass),
    [SPACER]: getProperties(options.spacer),
    [FILM]: getProperties(options.film),
}



export function PropertiesSelector() {

  const {selectedType} = useSelector(store => store.glass)
  const [details, setDetails] = useState(getDetails(selectedType.recipe))
  const [component, setComponent] = useState(details[0].key);

  useEffect(() => {
    setDetails(getDetails(selectedType.recipe)) 
  }, [selectedType])
  
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
    case FILM:
      return film;
  }
}


function getDetails(recipe){
  let counters = {}
  let type = ""
  let name = ""
  let key = ""
  return  recipe.map((item) => {
    switch(item){
      case GLASS: 
        type = GLASS
        name = "Скло"
        key = "glass"
        break
      case SPACER: 
        type = SPACER
        name = "Камера"
        key = "spacer"
        break
      case FILM: 
        type = FILM
        name = "Плівка"
        key = "film"
        break
    }

    counters[type] = counters.hasOwnProperty(type) ? ++counters[type]: 1 

    return {
      key: `${key}_${counters[type]}`,
      name: `${name} ${counters[type]}`,
      type: type,
    }
  })
}

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
            item.options = [...allFilters.get(item.name)].map(item => ({title: item}))
        }
        return item
    })

    return [...propsWithAddedOptions, ...propsWithOptions].sort((a, b) => a.order - b.order)
}