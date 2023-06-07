import {Button, Card, Container, Form, Nav, NavDropdown, Navbar} from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <Button variant="primary">Primary</Button>{' '}
    <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="success">Success</Button>{' '}
    <Button variant="warning">Warning</Button>{' '}
    <Button variant="danger">Danger</Button>{' '}
    <Button variant="info">Info</Button>{' '}
    <Button variant="light">Light</Button>{' '}
    <Button variant="dark">Dark</Button>
    <Button variant="link">Link</Button>
   
<div className='inline'>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.QDQvlCg420lzRElCK4AYhwHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.QDQvlCg420lzRElCK4AYhwHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.QDQvlCg420lzRElCK4AYhwHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
   {/*            formulaire             */}
   <div >
   <Container className='form'>
   <Form >
   <Form.Group className="mb-3" controlId="formGroupEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter email" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formGroupPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" placeholder="Password" />
   </Form.Group>
 </Form>
 <Button className='form_button' variant="outline-success">Success</Button>{' '}
   </Container>

   </div>
    

    </div>
    
   
    
  );
}

export default App;
