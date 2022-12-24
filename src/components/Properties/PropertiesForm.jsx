import { useMemo } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PropertyFormElement } from "./PropertyFormElement";

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

export function PropertiesForm({properties, changeThickness, nextStep}){
    const [selectedProps, setSelectedProps] = useState(getSelected(properties))

    const filteredProps = useMemo(() => {
        const propsWithValues = setValues(properties, selectedProps)

        const mapedFilters = propsWithValues.reduce((acc, item) => {
            if(item.hasOwnProperty("filterOf")){
                let arr = []
                if(acc.has(item.filterOf)){
                    arr = acc.get(item.filterOf)
                }
                arr.push({...item})
                acc.set(item.filterOf, arr)
            }
            return acc
        }, new Map())

        mapedFilters.forEach((filters, key) => {
            const prop = propsWithValues.find(({name}) => name === key)
            let options = [...prop.options]

            filters.map(filter => {        
                const filterValues = getFilterValues(options, filter)
                const filterObj = propsWithValues.find(({name, filterOf}) => key === filterOf && name === filter.name)
                filterObj.options = [...filterValues]
                if(filterObj.options.length > 0 && !filterObj.options.some(item => item === filterObj.value)){
                    filterObj.value = filterObj.options[0]
                }
                options = options.filter(item => item.filters[filter.name] === filter.value)
            })
            
        })

        return propsWithValues.map((item) => 
        {
            const newItem = {...item}
            if(item.hasOwnProperty("options") ){                          
                newItem.options = item.options.filter(({filters}) => {
                    const filterBy = propsWithValues.filter(({filterOf}) => filterOf === item.name) 
                    if(!filterBy) return true
                    return filterBy.reduce((acc, {name, value}) => {
                        return acc && filters[name] === value
                    }, true)
                })
            }  
            return newItem
        })
    }, [selectedProps, properties])

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


    const getHandler = (name) => {

        switch(name){
            case "thikness": 
                return changeThickness
            default: 
                return () => {}
        }
    }

    const onSubmit = (event) => {
        event.preventDefault()
        nextStep()
    }

    return (
        <Form onSubmit={onSubmit}>
            {filteredProps.map(props =>
                <PropertyFormElement 
                    props = {props}
                    key={props.name} 
                    checkFilters={checkFilters} 
                    handler={getHandler(props.name)}/>  
            )}

            <Button variant="primary" type="submit">
                Перейти до наступного кроку
            </Button>
             
        </Form>
      
    )

    
}

function getFilterValues(options, filter){
    return options.reduce((acc, item) => {
        acc.add(item.filters[filter.name])
        return acc
    }, new Set())
}