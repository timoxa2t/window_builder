import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { PropertyFormElement } from "./PropertyFormElement";

const GLASS = "type_glass"
const SPACER = "type_spacer"
const FILM = "type_film"




export function PropertiesForm({properties}){

    const [selectedProps, setSelectedProps] = useState(properties.map(item => (
        {
            name: item.name,
            value: item.hasOwnProperty("options") ? item.options[0]?.title: item.value
        }
    ))
    )

    const filterProps = () => {
       
        const propsWithValues = properties.map(item => {
            const newItem = {...item}
            newItem.value = selectedProps.find(({name}) => item.name === name).value
            return newItem
        })

        return propsWithValues.map((item) => 
        {
            if(item.hasOwnProperty("options") ){                
                item.options = item.options.filter(({filters}) => {
                    const filterBy = propsWithValues.filter(({filterOf}) => filterOf === item.name) 
                    if(!filterBy) return true
                    return filterBy.reduce((acc, {name, value}) => {
                        return acc && filters[name] === value
                    }, true)
                })
            }
            return item
        })
    }

    const [filteredProps, setFilteredProps] = useState(filterProps())


    const checkFilters = (key, value) => {
        setSelectedProps(selectedProps.map(item => 
            {
                return {
                    name: item.name,
                    value: item.name === key ? value: item.value
                }
            })
        )
    }

    useEffect(() => {
        setFilteredProps(filterProps())
    }, selectedProps)

    return (
        <Form>
            {filteredProps.map(({type, name, title, options, value}) => 
                <PropertyFormElement key={name} type={type} name={name} title={title} options={options} value={value} checkFilters={checkFilters}/>  
            )}
             
        </Form>
      
    )
}

