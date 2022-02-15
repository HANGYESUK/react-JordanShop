import './App.css';
import { Navbar, Container, Nav, Button }  from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className='jumboTron'>
        <h1>20% Season of!</h1>
        <p>아이즈원 !!</p>
        <Button variant="primary">Primary</Button>
      </div>

    </div>
  );
}

export default App;
