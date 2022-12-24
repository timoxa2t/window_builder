
import { Nav, Tab } from "react-bootstrap";
import { ObjectForm } from "./ObjectForm";
import { PropertiesSelector } from "./Properties/PropertiesSelector";
import { TypeSelector } from "./TypeSelector";
import style from'../css/Builder.module.css';
import { useState } from "react";
import { AditionalPropsSelector } from "./AditionalPropsSelector";


const OBJECT_FORM_PAGE = "OBJECT_FORM_PAGE"
const TYPE_SELECTOR_PAGE = "TYPE_SELECTOR_PAGE"
const PROPERTIES_PAGE = "PROPERTIES_PAGE"
const SIZE_LIST_PAGE = "SIZE_LIST_PAGE"
const DELIVERY_INFO_PAGE = "DELIVERY_INFO_PAGE"

const TABS = [
    {
        title: "Крок 1",
        eventKey: OBJECT_FORM_PAGE,
        component: ObjectForm,
        paneStyle: ""
    },
    {
        title: "Крок 2",
        eventKey: TYPE_SELECTOR_PAGE,
        component: TypeSelector,
        paneStyle: ""
    },
    {
        title: "Крок 3",
        eventKey: PROPERTIES_PAGE,
        component: PropertiesSelector,
        paneStyle: style.tab
    },
    {
        title: "Крок 4",
        eventKey: SIZE_LIST_PAGE,
        component: AditionalPropsSelector,
        paneStyle: ""
    },
    {
        title: "Крок 5",
        eventKey: DELIVERY_INFO_PAGE,
        component: ObjectForm,
        paneStyle: ""
    },
]


export function Builder(){
    const [currentTab, setCurrentTab] = useState(TABS[0].eventKey)
    
    const nextStep = () => {
        const tabIndex = TABS.findIndex(tab => tab.eventKey === currentTab)
        setCurrentTab(TABS[tabIndex + 1].eventKey)
    }

    return (
        <Tab.Container  defaultActiveKey="first" onSelect={(key) => setCurrentTab(key)}>

            <Nav className={style.nav_bar}>
                {TABS.map(({title, eventKey}) =>  
                    <Nav.Item 
                        key={eventKey} 
                        className={style.nav_item + (eventKey === currentTab ? " " + style.nav_item__active: "")} 
                        >
                        <Nav.Link eventKey={eventKey}>{title}</Nav.Link>
                    </Nav.Item>
                )}
            </Nav>

            <Tab.Content className={style.tab_container}>
                {TABS.map(({eventKey, component, paneStyle}) => { 
                        const SpecificComponent = component
                        return (
                            <Tab.Pane key={eventKey} eventKey={eventKey} className={paneStyle} active={eventKey === currentTab}>
                                <SpecificComponent nextStep={nextStep}/>
                            </Tab.Pane>
                        )
                    }
                )} 
            </Tab.Content>
        </Tab.Container>
    )
}