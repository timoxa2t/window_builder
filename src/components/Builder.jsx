import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { ObjectForm } from "./ObjectForm";
import { PropertiesSelector } from "./PropertiesSelector";
import { TypeSelector } from "./TypeSelector";


export function Builder(){

    return (
        <>
            <Tabs  defaultActiveKey="step_1"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="step_1" title="Крок 1">
                    <ObjectForm/>    
                </Tab>
                <Tab eventKey="step_2" title="Крок 2">
                    <TypeSelector/>
                </Tab>
                <Tab eventKey="step_3" title="Крок 3">
                    <PropertiesSelector/>
                </Tab>
                <Tab eventKey="step_4" title="Крок 4">
                    
                </Tab>
                <Tab eventKey="step_5" title="Крок 5">
                    
                </Tab>
            </Tabs>
            
            
           
        </>
    )
}