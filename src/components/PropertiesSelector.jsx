import { Container, Form, Image, Tab, Tabs } from "react-bootstrap";
import style from "../css/PropertiesSelector.module.css"
import flare from "../img/flare.png"

const details = {
    glass_1: {
        name:"Скло 1"
    },
    spacer_1: {
        name:"Камера 1"
    },
    glass_2: {
        name:"Скло 2"
    }, 
    spacer_2:{
        name:"Камера 2"
    },
    glass_3: {
        name:"Скло 3"
    }
}

export function PropertiesSelector(){
    return (
        <Container className="row">
            <Container className={style.visual_side + " col-6"} >
                <Image src={flare}/>
            </Container>
            <Container className="col-6">
                <Tabs>
                    {Object.entries(details).map(
                        ([key, val]) => 
                        <Tab eventKey={key} title={val.name}>
                            
                        </Tab>
                    )}
                </Tabs>
            </Container>    
        </Container>  
    )
}