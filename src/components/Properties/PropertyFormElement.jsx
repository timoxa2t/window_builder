import { useMemo, useState } from "react"
import { Form } from "react-bootstrap"
import allOptions from "../../options.json"
import style from "../../css/PropertyFormElement.module.css"

const FORM_SELECT = "select"
const FORM_CHECKBOX = "checkbox"


function getSelected(properties){
    return properties.map(item => (
        {
            name: item.name,
            value: item.hasOwnProperty("options") ? item.options[0]?.title: item.value
        }
    ))
}

function setValues(props, values){
    return props.map(item => {
        const newItem = {...item}
        newItem.value = values.find(({name}) => item.name === name).value
        return newItem
    })
}

export function PropertyFormElement({
        props,
        checkFilters, 
        handler   
    }){

    const { type, name, title, sufix, options, value, subParams} = props
    const [children, setChildren] = useState()
    const [currentValue, setCurentValue] = useState(value)

    const chooseOption = (event) => {
        const {id, value} = event.target
        checkFilters(id, value)
        setCurentValue(value)
        if(handler){
            handler(value)
        }
    }


    const emptyValue = value === "<Виберіть значення зі списку>"
    
    useMemo(() => {
        if(!subParams || emptyValue || children) return []
        
        const subParamsOptions = subParams.map(item => {
            const detailed = allOptions.subParams.find(subParam => subParam.name === item)     
            return detailed
        })
        return setChildren(setValues(subParamsOptions, getSelected(subParamsOptions)))
    }, [emptyValue, subParams, children])

    switch(type){
        case FORM_SELECT: 
        return (
            <div className={style.group_container}>
            <Form.Group controlId={name}>
                <Form.Label>{title}</Form.Label>
                <Form.Select onChange={chooseOption} value={currentValue}>
                    {options.map(option => {
                            const value = option.hasOwnProperty("title")? option.title: option
                            const title = value + (sufix ? sufix: "")
                            return <option key={value} value={value}>{title}</option>
                        }
                    )} 
                </Form.Select>
            </Form.Group>
            {children && !emptyValue && children.map(child => 
                <PropertyFormElement 
                    props = {child}
                    key={child.name} 
                    checkFilters={() => {}} 
                    handler={(value) => {
                        const newChildren = [...children]
                        const newChild = newChildren.find(newChild => newChild.name === child.name)
                        newChild.value = value
                        setChildren(newChildren)
                    }}
                    />)}
            </div>
        )
        case FORM_CHECKBOX: 
            return <div className={style.checkbox}>
                    <Form.Check  label={title} name={name} type="switch"/>
                </div>
        default: 
            return (
            <Form.Group controlId={name}>
                <Form.Label>{title}</Form.Label>
                <Form.Control type={type} value={value}/>
            </Form.Group>
        )
    }
    
}