import React from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

function Layout({ children }) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search Words" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

            {children}

        </div>
    )
}

export default Layout
