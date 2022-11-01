
import { Nav, Tab, Tabs } from "react-bootstrap";
import { ObjectForm } from "./ObjectForm";
import { PropertiesSelector } from "./PropertiesSelector";
import { TypeSelector } from "./TypeSelector";
import style from'../css/Builder.module.css';


export function Builder(){

    return (
        <Tab.Container  defaultActiveKey="first">

            <Nav>
                <Nav.Item>
                    <Nav.Link eventKey="step_1">Крок 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="step_2">Крок 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="step_3">Крок 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="step_4">Крок 4</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="step_5">Крок 5</Nav.Link>
                </Nav.Item>
            </Nav>

            <Tab.Content className={style.tab_container}>
                <Tab.Pane eventKey="step_1">
                    <ObjectForm/>
                </Tab.Pane>
                <Tab.Pane eventKey="step_2">
                    <TypeSelector/>
                </Tab.Pane>
                <Tab.Pane eventKey="step_3" className={style.tab}>
                    <PropertiesSelector/>
                </Tab.Pane>
                <Tab.Pane eventKey="step_4">

                </Tab.Pane>
                <Tab.Pane eventKey="step_5">

                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    )
    // return (
    //     <Tabs defaultActiveKey="step_1"
    //         id="uncontrolled-tab-example"
    //         className={style.tabs + " mb-3"}
    //         fill
    //     >
    //         <Tab className={style.tab} eventKey="step_1" title="Крок 1">
    //             <ObjectForm/>    
    //         </Tab>
    //         <Tab className={style.tab} eventKey="step_2" title="Крок 2">
    //             <TypeSelector/>
    //         </Tab>
    //         <Tab className={style.tab} eventKey="step_3" title="Крок 3">
    //             <PropertiesSelector/>
    //         </Tab>
    //         <Tab className={style.tab} eventKey="step_4" title="Крок 4">
                
    //         </Tab>
    //         <Tab className={style.tab} eventKey="step_5" title="Крок 5">
                
    //         </Tab>
    //     </Tabs>
    // )
}