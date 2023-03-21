import React from "react";
import { Navbar, Container } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">News App</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default NavigationBar;