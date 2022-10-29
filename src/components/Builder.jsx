
import { Tab, Tabs } from "react-bootstrap";
import { ObjectForm } from "./ObjectForm";
import { PropertiesSelector } from "./PropertiesSelector";
import { TypeSelector } from "./TypeSelector";
import style from'../css/Builder.module.css';


export function Builder(){

    return (
        <Tabs defaultActiveKey="step_1"
            id="uncontrolled-tab-example"
            className={style.tabs + " mb-3"}
            fill
        >
            <Tab className={style.tab} eventKey="step_1" title="Крок 1">
                <ObjectForm/>    
            </Tab>
            <Tab className={style.tab} eventKey="step_2" title="Крок 2">
                <TypeSelector/>
            </Tab>
            <Tab className={style.tab} eventKey="step_3" title="Крок 3">
                <PropertiesSelector/>
            </Tab>
            <Tab className={style.tab} eventKey="step_4" title="Крок 4">
                
            </Tab>
            <Tab className={style.tab} eventKey="step_5" title="Крок 5">
                
            </Tab>
        </Tabs>
    )
}