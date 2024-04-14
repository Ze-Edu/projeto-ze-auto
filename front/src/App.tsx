import './App.scss'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <main>

      <header className="header-container">

      <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#"><img
              alt=""
              src="img/car_14444.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Zé - Auto</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', margin: 'auto'}}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Integração GPT</Nav.Link>
            <Nav.Link href="https://mzdevelopment.com.br/jose/" target='blank'>Portfólio</Nav.Link>
          </Nav>
          <Button variant="outline-info">
              Contato
        </Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      </header>

          <div className="content-container">
            <div className="heading-container">
              <h2>Consulte sobre revisão</h2>
              <h2>Do seu carro.</h2>
            </div>
              
              <div className="bubble redcar">
                🚒
              </div>
              <div className="bubble bluecar">
                🚘
              </div>
              <div className="bubble bike">
                🚑
              </div>
              <div className="bubble alien">
                🛸
              </div>
          </div>
          <div className="form-chat">

          </div>
          <footer className="footer">

          </footer>
    </main>
  )
}

export default App
