import { Button, Form } from "react-bootstrap";



export function ObjectForm({nextStep}){

    const onSubmit = (event) => {
        event.preventDefault()
        nextStep()
    }
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="objectName">
                <Form.Label>Створіть назву об’єкта</Form.Label>
                <Form.Control type="text" placeholder="Об’єкт 1" />
            </Form.Group>  
            <Form.Group className="mb-3" controlId="region">
                <Form.Label>Оберіть область</Form.Label>
                <Form.Control type="text" placeholder="Київська" data={["Київ", "Дубно"]}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
                <Form.Label>Впишіть місто</Form.Label>
                <Form.Control type="text" placeholder="Київ" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Перейти до наступного кроку
            </Button>
        </Form>
      
    )
}