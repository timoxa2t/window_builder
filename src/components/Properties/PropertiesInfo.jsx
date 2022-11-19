import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-regular-svg-icons'
import { Nav, Tab } from "react-bootstrap";
import style from "../../css/PropertiesSelector.module.css";



export function PropertiesInfo({details, activeComponent, chooseComponent}){

    return (
        <Tab.Container defaultActiveKey={activeComponent} onSelect={chooseComponent}>
          <Nav>
            {details.map(({ key, name }) => (
              <Nav.Item key={key}>
                <Nav.Link eventKey={key}>{name}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Tab.Content className={style.tab_container}>
            {details.map(({ key, name, type, properties }) => (
              <Tab.Pane eventKey={key} active={activeComponent === key} >
                <ElementInfo properties={properties} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>            
    )
}

function ElementInfo({properties}){

    const getValue = (value) => {
        switch(typeof value){
            case "boolean": 
                return <FontAwesomeIcon 
                    className={style.property + " " + (value ? style.checked: style.not_checked)} 
                    icon={value ? faSquarePlus: faSquareMinus} 
                />
            default: 
                return <h3>{value}</h3>
        }
    }

    return properties.map(({title, value}) => 
        <>
            <h3>{title}</h3>
            {getValue(value)}
        </>
        
    )
}

