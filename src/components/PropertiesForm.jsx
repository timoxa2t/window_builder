import { Form } from "react-bootstrap";
import { PropertyElement } from "./PropertyElement";

const GLASS = "type_glass"
const SPACER = "type_spacer"
const FILM = "type_film"




export function PropertiesForm({properties}){
    

    return (
        <Form>
            {properties.map(({type, name, title, options, value}) => 
                <PropertyElement key={name} type={type} name={name} title={title} options={options} value={value}/>  
            )}
             
        </Form>
      
    )
}

