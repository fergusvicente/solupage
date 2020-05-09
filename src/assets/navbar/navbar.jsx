import React from 'react';
import { Nav, Navbar, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';


export const NavigationBar = () => (

<Navbar bg="primary" variant="dark">
<Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="/">Solumar</Nav.Link> 
  <Nav.Link href="/about">Quienes somos?</Nav.Link> 
  <Nav.Item> <NavDropdown title="Lavado Nasal" 
            
            href="/lavadonasal" id="collasible-nav-down">
                <NavDropdown.Item href="#action/3.1">alergias</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">sinusitis</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">rinitis</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">resfriados</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">post operatorios</NavDropdown.Item>
            
            </NavDropdown></Nav.Item>

            <Nav.Item><Nav.Link href="/MetodoUso">Metodos de uso</Nav.Link> </Nav.Item>
            <Nav.Item><Nav.Link href="/preguntas">Preguntas frecuentes</Nav.Link> </Nav.Item>
            <Nav.Item><Nav.Link href="/dondecomprar">Donde comprarlo?</Nav.Link> </Nav.Item>
            <Nav.Item><Nav.Link href="/contact">Contacto</Nav.Link> </Nav.Item>

</Nav>

</Navbar>
);








/*import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color:#222
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: green;

        &:hover {
            color: white;
        }
    }

    `;

/**/


/*export const NavigationBar = () => (
    const showDropdown = false;
    const [showDropdown, setShowDropdown] = 
    React.useState(false) 
    <Styles>
        <Navbar 
        collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">logo solumar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Item><Nav.Link href="/">Solumar</Nav.Link> </Nav.Item>
            <Nav.Item><Nav.Link href="/about">Quienes somos?</Nav.Link> </Nav.Item>
            
            <Nav.Item> <NavDropdown title="Lavado Nasal" 
            onMouseEnter = { () => setShowDropdown(true)}
            onMouseLeave = { () => setShowDropdown(false)}
            show={showDropdown}
            href="/lavadonasal" id="collasible-nav-down">
                <NavDropdown.Item href="#action/3.1">alergias</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">sinusitis</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">rinitis</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">resfriados</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">post operatorios</NavDropdown.Item>
            
            </NavDropdown></Nav.Item>
            
            
            
            
            
            
            
            <Nav.Item><Nav.Link href="/MetodoUso">Metodos de uso</Nav.Link> </Nav.Item>
            <Nav.Item><Nav.Link href="/preguntas">Preguntas frecuentes</Nav.Link> </Nav.Item>
            <Nav.Item><Nav.Link href="/dondecomprar">Donde comprarlo?</Nav.Link> </Nav.Item>
            <Nav.Item><Nav.Link href="/contact">Contacto</Nav.Link> </Nav.Item>
            

            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </Styles>
)*/



/* <NavDropdown title="Dropdown" href="MakeThisAlinkTo?" id="collasible-nav-down">
<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown> 

2.1.1. alergias
2.1.2. sinusitis
2.1.3. rinitis
2.1.4. resfriados
2.1.5. post operatorios

*/