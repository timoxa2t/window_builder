import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import style from "../css/PropertiesSelector.module.css"
import flare from "../img/flare.png"
import glass_12 from "../img/glass_12.png"
import camera from "../img/camera.png"
import { useState } from "react";
import { PropertiesForm } from "./PropertiesForm";

const options = {
    nomenclatureType: [
        "Скло сире", 
        "Триплекс"
    ]
}

const GLASS = "type_glass"
const SPACER = "type_spacer"
const FILM = "type_film"

const details = [
    {
        key: "glass_1",
        name:"Скло 1",
        type: GLASS,
        properties: [
            {
                fieldType: "select",
                name: "Вид номенклатури",
                value: options.nomenclatureType[0]
            }
        ]
    },
    {
        key: "spacer_1",
        name:"Камера 1",
        type: SPACER,
        properties: [
            {
                fieldType: "select",
                name: "Вид номенклатури",
                value: options.nomenclatureType[0]
            }
        ]   
    },
    {
        key: "glass_2",
        name:"Скло 2",
        type: GLASS,
        properties: [
            {
                fieldType: "select",
                name: "Вид номенклатури",
                value: options.nomenclatureType[0]
            }
        ]
    }, 
    {
        key: "spacer_2",
        name:"Камера 2",
        type: SPACER,
        properties: [
            {
                fieldType: "select",
                name: "Вид номенклатури",
                value: options.nomenclatureType[0]
            }
        ]
    },
    {
        key: "glass_3",
        name:"Скло 3",
        type: GLASS,
        properties: [
            {
                fieldType: "select",
                name: "Вид номенклатури",
                value: options.nomenclatureType[0]
            }
        ]
    }
]

export function PropertiesSelector(){

    const [component, setComponent] = useState(details[0].key)

    const chooseComponent = (key) => {
        setComponent(key)
    }

    return (
        <Row className={style.container}>
            <Col className={style.visual_side} >
                <Image className={style.flare} src={flare}/>
                <ul className={style.component_list}>
                    {details.map(
                        ({key, name, type}) =>                     
                        <li 
                            key={key} 
                            className={style.component + (key === component ? " " + style.component__active: "")} 
                            onClick={() => chooseComponent(key)}>
                            <Image className={style.component_img} src={getImg(type)} />
                        </li>
                    )}
                </ul>          
            </Col>
            <Col>              
                <Tab.Container  defaultActiveKey={component} onSelect={chooseComponent}>
                    <Nav>
                        {details.map(
                            ({key, name}) => 
                            
                            <Nav.Item>
                                <Nav.Link eventKey={key}>{name}</Nav.Link>
                            </Nav.Item>        
                        )}
                    </Nav>

                    <Tab.Content className={style.tab_container}>
                        {details.map(
                            ({key, name, properties}) => 
                            
                            <Tab.Pane eventKey={key} active={component === key}>
                                <PropertiesForm properties={properties}/>
                            </Tab.Pane>
                         )}
                    </Tab.Content>
                </Tab.Container>
            </Col>    
        </Row>  
    )
}

function getImg(type){
    switch(type){
        case GLASS: 
            return glass_12
        case SPACER: 
            return camera
    }
}