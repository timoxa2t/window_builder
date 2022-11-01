import { Button, Form } from "react-bootstrap";

const GLASS = "type_glass"
const SPACER = "type_spacer"
const FILM = "type_film"

export function PropertiesForm({properties}){
    

    return (
        <Form>
            {properties.map(({name, val, fieldType, selectionOptions}) => 
                <Form.Group className="mb-3" controlId="objectName">
                    <Form.Label>{name}</Form.Label>
                    {fieldType === "select" ? 
                    <Form.Select>
                        {selectionOptions.map(option => <option value={option}>{option}</option>)} 
                    </Form.Select>
                    : 
                    <Form.Control type={fieldType} value={val}/>}
                </Form.Group>
            )}
             
        </Form>
      
    )
}