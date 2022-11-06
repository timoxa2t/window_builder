
import { Nav, Tab, Tabs } from "react-bootstrap";
import { ObjectForm } from "./ObjectForm";
import { PropertiesSelector } from "./PropertiesSelector";
import { TypeSelector } from "./TypeSelector";
import style from'../css/Builder.module.css';
import { useState } from "react";


const OBJECT_FORM_PAGE = "OBJECT_FORM_PAGE"
const TYPE_SELECTOR_PAGE = "TYPE_SELECTOR_PAGE"
const PROPERTIES_PAGE = "PROPERTIES_PAGE"
const SIZE_LIST_PAGE = "SIZE_LIST_PAGE"
const DELIVERY_INFO_PAGE = "DELIVERY_INFO_PAGE"

const TABS = [
    {
        title: "Крок 1",
        eventKey: "OBJECT_FORM_PAGE",
        component: ObjectForm,
        paneStyle: ""
    },
    {
        title: "Крок 2",
        eventKey: "TYPE_SELECTOR_PAGE",
        component: TypeSelector,
        paneStyle: ""
    },
    {
        title: "Крок 3",
        eventKey: "PROPERTIES_PAGE",
        component: PropertiesSelector,
        paneStyle: style.tab
    },
    {
        title: "Крок 4",
        eventKey: "SIZE_LIST_PAGE",
        component: ObjectForm,
        paneStyle: ""
    },
    {
        title: "Крок 5",
        eventKey: "DELIVERY_INFO_PAGE",
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

            <Nav>
                {TABS.map(({title, eventKey}) =>  
                    <Nav.Item>
                        <Nav.Link eventKey={eventKey}>{title}</Nav.Link>
                    </Nav.Item>
                )}
            </Nav>

            <Tab.Content className={style.tab_container}>
                {TABS.map(({eventKey, component, paneStyle}) => { 
                        const SpecificComponent = component
                        return (
                            <Tab.Pane eventKey={eventKey} className={paneStyle} active={eventKey === currentTab}>
                                <SpecificComponent nextStep={nextStep}/>
                            </Tab.Pane>
                        )
                    }
                )} 
            </Tab.Content>
        </Tab.Container>
    )
    // return (
    //     <Tab.Container  defaultActiveKey="first">

    //         <Nav>
    //             <Nav.Item>
    //                 <Nav.Link eventKey={OBJECT_FORM_PAGE}>Крок 1</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link eventKey={TYPE_SELECTOR_PAGE}>Крок 2</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link eventKey={PROPERTIES_PAGE}>Крок 3</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link eventKey={SIZE_LIST_PAGE}>Крок 4</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link eventKey={DELIVERY_INFO_PAGE}>Крок 5</Nav.Link>
    //             </Nav.Item>
    //         </Nav>

    //         <Tab.Content className={style.tab_container}>
    //             <Tab.Pane eventKey={OBJECT_FORM_PAGE}>
    //                 <ObjectForm/>
    //             </Tab.Pane>
    //             <Tab.Pane eventKey={TYPE_SELECTOR_PAGE}>
    //                 <TypeSelector/>
    //             </Tab.Pane>
    //             <Tab.Pane eventKey={PROPERTIES_PAGE} className={style.tab}>
    //                 <PropertiesSelector/>
    //             </Tab.Pane>
    //             <Tab.Pane eventKey={SIZE_LIST_PAGE}>

    //             </Tab.Pane>
    //             <Tab.Pane eventKey={DELIVERY_INFO_PAGE}>

    //             </Tab.Pane>
    //         </Tab.Content>
    //     </Tab.Container>
    // )

}