import { Nav, Tab } from "react-bootstrap";
import style from "../../css/PropertiesSelector.module.css";
import { useEffect, useState } from "react";
import { PropertiesForm } from "./PropertiesForm";
import options from "../../options.json";
import { useSelector } from "react-redux";
import { Properties } from "./Properties";
import { PropertiesVisualization } from "./PropertiesVisualization";

const GLASS = "type_glass";
const SPACER = "type_spacer";
const FILM = "type_film";

const allProperties = {
    [GLASS]: getProperties(options.glass),
    [SPACER]: getProperties(options.spacer),
    [FILM]: getProperties(options.film),
}

export function PropertiesSelector({nextStep}) {

  const {selectedType} = useSelector(store => store.glass)
  const [details, setDetails] = useState(getDetails(selectedType.recipe))
  const [component, setComponent] = useState(details[0]?.key);

  useEffect(() => {
    setDetails(getDetails(selectedType.recipe)) 
  }, [selectedType])
  
  const chooseComponent = (key) => {
    setComponent(key);
  };

  const changeThickness = (thickness) => {
    let newDets = [...details]
    const index = newDets.findIndex(({key}) => key === component)
    newDets[index].thickness = thickness
    setDetails(newDets)
  }

    return (
      <Properties>
        <PropertiesVisualization details={details} chooseComponent={chooseComponent} activeComponent={component} />
        <Tab.Container defaultActiveKey={component} onSelect={chooseComponent}>
           <Nav>
             {details.map(({ key, name }) => {
              const activeNavClass =  (key === component ? " " + style.nav_item__active: "")
              const activeNavLinkClass =  (key === component ? " " + style.nav_link__active: "")
              return (
              <Nav.Item 
                key={key} 
                className={style.nav_item + activeNavClass}>
                <Nav.Link className={style.nav_link + activeNavLinkClass} eventKey={key}>{name}</Nav.Link>
              </Nav.Item>
            )})}
          </Nav>

          <Tab.Content className={style.tab_container}>
            {details.map(({ key, name, type }) => (
              <Tab.Pane key={key} eventKey={key} active={component === key} >
                <PropertiesForm properties={allProperties[type]} changeThickness={changeThickness} nextStep={nextStep} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Properties>
    )
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
      default:

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
    const allFilters = propsWithOptions.reduce((acc, {options}) => new Map([...acc, ...getFilters(options)]), new Map())

    const propsWithAddedOptions = propsWithoutOptions.map(item => {
        if(allFilters.has(item.name)) {
            item.options = [...allFilters.get(item.name)].map(item => ({title: item}))
        }
        return item
    })

    return [...propsWithAddedOptions, ...propsWithOptions].sort((a, b) => a.order - b.order)
}