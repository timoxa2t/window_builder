import { Button, Container, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg"


export function Header(){
    const navigate = useNavigate();

    const goToBuilder = () => {
        navigate("/builder", { replace: true });
    }

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="https://skloresurs.com/">
                    <img src={logo}/>
                </Navbar.Brand>
                <NavDropdown title="особистий кабінет" id="user-menu">
                    <NavDropdown.Item href="#action/3.1">Профіль</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Замовлення</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Вийти</NavDropdown.Item>
                </NavDropdown>
                <Button onClick={goToBuilder}>Створити замовлення</Button>
            </Container>
            
        </Navbar>
    )
}