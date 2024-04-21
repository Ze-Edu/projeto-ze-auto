import './App.scss'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import img1 from './img/car1.jpg';
import img2 from './img/car2.jpg';
import img3 from './img/car3.jpg';
import card3 from './img/card3.jpg';
import card2 from './img/card2.jpg';
import card1 from './img/card1.jpg';
import zap from './img/logoZap.png';
import delorean from './img/delorean2.png';


export function App() {
  return (
    <main>

      <header className="header-container" style={{position: "fixed", zIndex:999,   width: "100%"}}>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#home"><img
              alt=""
              src={delorean}
              width="30"
              height="30"
              className="d-inline-block align-top" />{' '}Zé - Auto</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px', margin: 'auto' }}
                navbarScroll
              >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="https://platform.openai.com/examples" target='blank'>Integração GPT</Nav.Link>
                <Nav.Link href="https://mzdevelopment.com.br/jose/" target='blank'>Portfólio</Nav.Link>
              </Nav>
              <a id="aContato" href="https://wa.me/5511942152843?text=Olá, como vai? Queria saber mais, de como fez essa integração com o CHAT GPT."
                    target="_blank"><Button variant="outline-light">
                    Contato
              </Button>{' '}</a>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* whatts */}
                <div className="whats">
                    <a
                    href="https://wa.me/5511942152843?text=Olá, como vai? Queria saber mais, de como fez essa integração com o CHAT GPT."
                    target="_blank">
                    <img src={zap} id="imgWhats" />
                    </a>
                </div>

      <div id="home" className="content-container">
        <div className="heading-container">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"/>
              <Carousel.Caption>
                <h3>Cheque seu Carro com Inteligência Artificial!</h3>
                <p>Descubra um novo nível de cuidado automotivo com nossa ferramenta de revisão de carro baseada em IA.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide" />
              <Carousel.Caption>
                <h3>Com dados do seu veículo</h3>
                <p>Insira os dados do seu veículo e receba instantaneamente uma análise completa sobre o que seu carro precisa. É rápido, fácil e incrivelmente preciso!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide" />
              <Carousel.Caption>
                <h3>Revisão Inteligente ao Seu Alcance</h3>
                <p>
                  Com apenas alguns cliques, nosso sistema alimentado por IA, o ChatGPT, analisa os detalhes do seu veículo para fornecer um relatório detalhado sobre o estado atual e as necessidades de manutenção.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="fundo-content">

        <div id="cards" className='cards'>
        <Card style={{ width: '18rem' }}>
          <div className='fcard'>
            <Card.Img variant="top" src={card1} />
          </div>
          <Card.Body style={{ marginBottom:'50px' }}>
            <Card.Title>Orientação Confiável</Card.Title>
            <Card.Text>
              Baseado em dados e alimentado por uma das IAs mais avançadas do mundo.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <div className='fcard'>
            <Card.Img variant="top" src={card2} />
          </div>
          <Card.Body>
            <Card.Title>Economia de Tempo e Dinheiro</Card.Title>
            <Card.Text>
              Identifique exatamente o que seu carro precisa sem visitas desnecessárias a oficinas.
            </Card.Text>
            
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <div className='fcard'>
          <Card.Img variant="top" src={card3} />
          </div>
          <Card.Body>
            <Card.Title>Manutenção Preventiva</Card.Title>
            <Card.Text>
              Evite problemas maiores antes que eles ocorram, prolongando a vida útil do seu carro.
            </Card.Text>
            
          </Card.Body>
        </Card>
        </div>

        <div className="form-chat">
          <h1>Informações do Carro para consulta</h1>

          <Form.Label className='inputForm' htmlFor="marca"><b>Marca do Veículo</b></Form.Label>
          <Form.Select id="marca" aria-label="Default select example">
            <option>--Nenhum--</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="chevrolet">Chevrolet</option>
            <option value="citroen">Citroen</option>
            <option value="dodge">Dodge</option>
            <option value="fiat">Fiat</option>
            <option value="ford">Ford</option>
            <option value="honda">Honda</option>
            <option value="hyundai">Hyundai</option>
            <option value="jaguar">Jaguar</option>
            <option value="jeep">Jeep</option>
            <option value="kia">Kia</option>
            <option value="land_rover">Land Rover</option>
            <option value="lexus">Lexus</option>
            <option value="mazda">Mazda</option>
            <option value="mercedes_benz">Mercedes-Benz</option>
            <option value="mitsubishi">Mitsubishi</option>
            <option value="nissan">Nissan</option>
            <option value="peugeot">Peugeot</option>
            <option value="porsche">Porsche</option>
            <option value="renault">Renault</option>
            <option value="subaru">Subaru</option>
            <option value="suzuki">Suzuki</option>
            <option value="tesla">Tesla</option>
            <option value="toyota">Toyota</option>
            <option value="volkswagen">Volkswagen</option>
            <option value="volvo">Volvo</option>
          </Form.Select>

          <Form.Label className='inputForm' htmlFor="carroceria"><b>Carroceria do Veículo</b></Form.Label>
          <Form.Select id="carroceria" aria-label="Default select example">
            <option>--Nenhum--</option>
            <option value="sedan">Sedan</option>
            <option value="hatchback">Hatchback</option>
            <option value="suv">SUV</option>
            <option value="station_wagon">Station Wagon</option>
            <option value="convertible">Conversível</option>
            <option value="coupe">Coupé</option>
            <option value="minivan">Minivan</option>
            <option value="pickup">Pickup</option>
            <option value="van">Van</option>
            <option value="roadster">Roadster</option>
          </Form.Select>

          <Form.Label className='inputForm' htmlFor="cat"><b>Categoria do Veículo</b></Form.Label>
          <Form.Select id="cat" aria-label="Default select example">
            <option>--Nenhum--</option>
            <option value="economy">Econômico</option>
            <option value="midrange">Intermediário</option>
            <option value="luxury">Luxo</option>
            <option value="sports">Esportivo</option>
            <option value="suv">SUV</option>
            <option value="truck">Caminhão</option>
            <option value="van">Van</option>
            <option value="commercial">Comercial</option>
            <option value="electric">Elétrico</option>
            <option value="hybrid">Híbrido</option>
            <option value="performance">Alta Performance</option>
            <option value="offroad">Off-Road</option>
            <option value="compact">Compacto</option>
            <option value="subcompact">Subcompacto</option>
            <option value="family">Familiar</option>
          </Form.Select>

          <Form.Label className='inputForm' htmlFor="km"><b>Quilometragem do Veículo</b></Form.Label>
          <Form.Control type="number" id="km" />

          <Form.Label className='inputForm' htmlFor="blindagem"><b>Veículo com blindagem</b></Form.Label>
          <Form>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} id="blindagem" className="mb-3">
                <Form.Check
                  inline
                  label="SIM"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`} />
                <Form.Check
                  inline
                  label="NÃO"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`} />
              </div>
            ))}
          </Form>
          <Button className='btnForm' variant="outline-dark">Enviar para consulta</Button>{' '}
        </div>
      </div>

      <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container">
                    <div>
                        <h1 className="footer__title">Zé-Auto</h1>
                        <span className="footer__subtitle">Solutions</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#home" className="footer__link">Home</a>
                        </li>
                        <li>
                            <a href="#cards" className="footer__link">Vantagens</a>
                        </li>
                        <li>
                            <a href="https://mzdevelopment.com.br/jose/#home" target='blank' className="footer__link">Portfolio</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a href="" className="footer__social">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                        </a>
                        <a href="https://github.com/Ze-Edu" target="_blank" className="footer__social">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
                        </a>
                        <a href="https://www.linkedin.com/in/josé-eduardo-845606221/" target="_blank" className="footer__social">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                        </a>
                    </div>
                </div>

                <p className="footer__copy">&#169; José Eduardo. Todos direitos reservados</p>
            </div>
        </footer>
    </main>
    
  );
}

export default App