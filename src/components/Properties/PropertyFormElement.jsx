import { Form } from "react-bootstrap"


const FORM_SELECT = "select"
const FORM_CHECKBOX = "checkbox"

export function PropertyFormElement({type, name, title, options, value, checkFilters}){

    const chooseOption = (event) => {
        const {id, value} = event.target
        checkFilters(id, value)
    }

    switch(type){
        case FORM_SELECT: 
        return (
            <Form.Group controlId={name}>
                <Form.Label>{title}</Form.Label>
                <Form.Select onChange={chooseOption}>
                    {options.map(option => {
                            const title = option.hasOwnProperty("title")? option.title: option
                            return <option value={title}>{title}</option>
                        }
                    )} 
                </Form.Select>
            </Form.Group>
        )
        case FORM_CHECKBOX: 
            return <Form.Check type={type} label={title} name={name}/> 
        default: 
            return (
            <Form.Group controlId={name}>
                <Form.Label>{title}</Form.Label>
                <Form.Control type={type} value={value}/>
            </Form.Group>
        )
    }
    
}