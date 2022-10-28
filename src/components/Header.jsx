import { Button, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../logo.svg"


export function Header(){

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo}/>
                </Navbar.Brand>
                <NavDropdown title="особистий кабінет" id="user-menu">
                    <NavDropdown.Item href="#action/3.1">Профіль</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Замовлення</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Вийти</NavDropdown.Item>
                </NavDropdown>
                <Button>Створити замовлення</Button>
            </Container>
            
        </Navbar>
    )
}