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
import car1 from './img/ca1.png';
import car2 from  './img/ca2.png';
import car3 from './img/batida.png';
import review2 from './img/review2.jpg';
import Modal from 'react-bootstrap/Modal';
import carro from './img/carro.png';
import { useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';
export function App() {
  const [show, setShow] = useState(false);
  const [showView, setView] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShow(false);
  const modalClose = () => setView(false);
  const [erroInp, setErroInp] = useState('');
  const [marca, setMarca] = useState("");
  const [carroceria, setCarroceria] = useState("");
  const [cat, setCat] = useState("");
  const [km, setKm] = useState("");
  const [blindado, setBlindado] = useState("");
  const [texto, settexto] = useState("");
  const [seiLa, setSeila] = useState('none');

  const [historico, setHistorico] = useState([]);

  const handleKmChange = (event:any) => {
    // Remove qualquer caractere não numérico do valor digitado
    const value = event.target.value.replace(/\D/g, '');

    // Formata o valor para incluir o separador de milhares e "Km" no final
    const formattedValue = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'Km';

    // Atualiza o estado com o valor formatado
    setKm(formattedValue);
  }

  function getURL() {

    if(marca != ''){
      if(carroceria != ''){
        if(cat != ''){
          if(km != ''){
            if(blindado != ''){

              setSeila('flex');

              axios.post('http://localhost:3000/post-test', {
              marca :marca,
              carroceria :carroceria,
              categoria :cat,
              Km :km,
              blindado:blindado
            })
            .then(function (response:any) {
              console.log(response);
              settexto(response.data);
              setShow(true);
              setSeila('none')
            })
            .catch(function (error:any) {
              console.log(error);
              setSeila('none')
            });
            }else{
              setErroInp('Blindagem')
              setShowAlert(true);
          setTimeout(()=> {
            setShowAlert(false)
          }, 3000)
              }
          }else{
            setErroInp('Quilometragem')
            setShowAlert(true);
          setTimeout(()=> {
            setShowAlert(false)
          }, 3000)
            }
        }else{
            setErroInp('categoria')
            setShowAlert(true);
          setTimeout(()=> {
            setShowAlert(false)
          }, 3000)
        }
      }else{
          setErroInp('Carroceria')
          setShowAlert(true);
          setTimeout(()=> {
            setShowAlert(false)
          }, 3000)
      }
    }else{
        setErroInp('Marca')
        setShowAlert(true);
          setTimeout(()=> {
            setShowAlert(false)
          }, 3000)
    }
  }

// O array vazio significa que isso só vai acontecer uma vez, similar ao componentDidMount.

function getHis() {
    setSeila('flex');
    axios.get('http://localhost:3000/get-test')
        .then(response => {
            // Transformar os dados recebidos em elementos JSX
            const items = response.data.map((item:any, index:any) => (
                <Accordion.Item key={index} className='itemAccord' eventKey={String(index)}>
                    <Accordion.Header><b>{item.perguntas}</b></Accordion.Header>
                    <Accordion.Body>
                        {item.respostas}
                    </Accordion.Body>
                </Accordion.Item>
            ));
            setHistorico(items); // Atualiza o estado com os novos itens
        })
        .then(() => {

            setView(true);
            setSeila('none');

        })
        .catch(error => {
            console.error('Erro ao buscar dados: ', error);
            setSeila('none');
        });
}
  
  return (
    <main>

{/* Inicio Header */}
      <header className="header-container" style={{position: "fixed", zIndex:999,   width: "100%"}}>
        <Navbar className="nav">
          <Container fluid>
            <Navbar.Brand href="#home"><img className='carMenu' style={{ width: '45px' }} src={carro}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px', margin: 'auto' }}
                navbarScroll>
                <Nav.Link className='linkNav' href="#home"><b>Home</b></Nav.Link>
                <Nav.Link className='linkNav' href="https://platform.openai.com/examples" target='blank'><b>Integração GPT</b></Nav.Link>
                <Nav.Link className='linkNav' href="https://mzdevelopment.com.br/jose/" target='blank'><b>Portfólio</b></Nav.Link>
              </Nav>
              <div>
              </div>
                <Button onClick={getHis} variant="outline-dark">
                <b>Historico</b>
                </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
{/* Fim Header */}

{/* Inicio Modais Reposta-Whats-Alert */}
      <Modal style={{width: "90%"}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CHAT GPT</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{whiteSpace: 'pre-wrap'}}>{texto}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Fechar
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
 
          <div className="whats">
            <a
              href="https://wa.me/5511942152843?text=Olá, como vai? Queria saber mais, de como fez essa integração com o CHAT GPT."
              target="_blank">
              <img src={zap} id="imgWhats" />
            </a>
          </div>

          {[
            'danger',
          ].map((variant) => (
            <Alert className='alert' show={showAlert} key={variant} variant={variant}>
              Necessário o preenchimento do campo {erroInp}
            </Alert>
          ))}
  
      <Modal show={showView} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Historico</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Accordion>{historico}</Accordion>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={modalClose}>
            Fechar
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      <div style={{display: seiLa}} className='fSpiner'>
        <Spinner className='spinner' animation="border"  variant="light" role="status">
          <span className="visually-hidden">Aguarde...</span>
        </Spinner>
      </div>
      

{/* Fim Modais Reposta-Whats-Alert */}

{/* Inicio Carrosel */}
      <div id="home" className="content-container">
        <div className="heading-container">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"/>
              <Carousel.Caption>
                <h3 style={{ color: '#FFBC0A'}}>Cheque seu Carro com Inteligência Artificial!</h3>
                <p>Descubra um novo nível de cuidado automotivo com nossa ferramenta de revisão de carro baseada em IA.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide" />
              <Carousel.Caption>
                <h3 style={{ color: '#FFBC0A'}}>Com dados do seu veículo</h3>
                <p>Insira os dados do seu veículo e receba instantaneamente uma análise completa sobre o que seu carro precisa. É rápido, fácil e incrivelmente preciso!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide" />
              <Carousel.Caption>
                <h3 style={{ color: '#FFBC0A'}}>Revisão Inteligente ao Seu Alcance</h3>
                <p>
                  Com apenas alguns cliques, nosso sistema alimentado por IA, o ChatGPT, analisa os detalhes do seu veículo para fornecer um relatório detalhado sobre o estado atual e as necessidades de manutenção.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
{/* Fim Carrosel */}


      <div className="fundo-content">

{/* Inicio cards */}
        
<div id='cards' className="cards">
  <Card className="custom-card">
    <Card.Img variant="top" src={card1} className="card-image" />
    <Card.Body>
      <Card.Title>Orientação Confiável</Card.Title>
      <Card.Text>
        Baseado em dados e alimentado por uma das IAs mais avançadas do mundo.
      </Card.Text>
      <img style={{width: "20%"}} src={car1}/>
    </Card.Body>
  </Card>

  <Card className="custom-card">
    <Card.Img variant="top" src={card2} className="card-image" />
    <Card.Body>
      <Card.Title>Economia Tempo/Dinheiro</Card.Title>
      <Card.Text>
        Identifique exatamente o que seu carro precisa sem visitas desnecessárias a oficinas.
      </Card.Text>
      <img style={{width: "20%"}} src={car2}/>
    </Card.Body>
  </Card>

  <Card className="custom-card">
    <Card.Img variant="top" src={card3} className="card-image" />
    <Card.Body>
      <Card.Title>Manutenção Preventiva</Card.Title>
      <Card.Text>
        Evite problemas maiores antes que eles ocorram, prolongando a vida útil do seu carro.
      </Card.Text>
      <img style={{width: "20%"}} src={car3}/>
    </Card.Body>
  </Card>
</div>


{/* Fim cards */}

{/* Inicio Suport / Help */}
<div className='textHelp'>
  <h1>Passo a passo <img className='carMenu' style={{ width: '40px', marginBottom: '5px'}} src={carro}/></h1>
  <Accordion style={{ width: '90%' }} defaultActiveKey={['0']} alwaysOpen>
    <Accordion.Item className='itemAccord' eventKey="0">
      <Accordion.Header ><strong>1- Insira os detalhes</strong></Accordion.Header>
      <Accordion.Body>
        Nos campo disponíveis, insira as informações sobre o veículo.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item className='itemAccord' eventKey="1">
      <Accordion.Header><strong>2- Envie a Pergunta</strong></Accordion.Header>
      <Accordion.Body>
        Após inserir os detalhes, clique no botão de "Enviar para consulta".
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item className='itemAccord' eventKey="2">
      <Accordion.Header><strong>3- Receba a Resposta</strong></Accordion.Header>
      <Accordion.Body>
        Aguarde alguns instantes enquanto nosso sistema e a IA processa sua pergunta e retorna com a resposta.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
</div>

{/* Inicio Suport / Help */}

<div className='linha'></div>       

{/* Inicio form */}
<div className="form-chat">

  <div className="form-content">
    <h1 className="form-title">Especificações do Veículo</h1>
    
    <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="marca"><strong>Marca do Veículo</strong></Form.Label>
        <Form.Select id="marca" value={marca} onChange={e => setMarca(e.target.value)}>
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
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="carroceria"><strong>Carroceria do Veículo</strong></Form.Label>
        <Form.Select id="carroceria" value={carroceria} onChange={e => setCarroceria(e.target.value)}>
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
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="cat"><strong>Categoria do Veículo</strong></Form.Label>
        <Form.Select id="cat" value={cat} onChange={e => setCat(e.target.value)}>
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
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="km"><strong>Quilometragem do Veículo</strong></Form.Label>
        <Form.Control type="text" id="km" value={km} onChange={e => {setKm(e.target.value); handleKmChange(event)} } />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="blindado"><strong>Veículo blindado</strong></Form.Label>
        <Form.Select id="blindado" value={blindado} onChange={e => setBlindado(e.target.value)}>
        <option >--Nenhum--</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
        </Form.Select>
      </Form.Group>

      <Button className="btnForm" variant='outline-warning' onClick={getURL}>Enviar para consulta</Button>
    </Form>
  </div>
</div>

{/* Fim form */}
        

{/* Incio MKT CLIENT */}

<div className="fundoMkt">
    <div className="mkt">
        {/* <div className="imgMkt"><img src={review1} alt="Descrição da imagem 1" /></div> */}
        <div className="textMkt">
            <h1>Benefícios</h1>
            <div className="linha"></div>
            <ul>
                <li><strong>Respostas Instantâneas:</strong> Obtenha respostas imediatas para suas dúvidas sobre revisão de veículos.</li>
                <li><strong>Informações Personalizadas:</strong> Receba recomendações que são adaptadas exatamente ao modelo de carro.</li>
                <li><strong>Economia:</strong> Previna-se contra reparos caros e desnecessários com nossas orientações precisas.</li>
            </ul>
        </div>
    </div>

    <div className="imgMkt"><img src={review2} alt="Descrição da imagem 2" /></div>

    <div className="mkt">
        <div className="textMkt">
            <h1>Previna-se</h1>
            <div className="linha"></div>
            <p><strong>Não espere</strong> até que seja tarde demais!</p>
            <p>Use agora mesmo nosso serviço de consulta e mantenha seu veículo em condições perfeitas de rodagem.</p>
            <p>Comece já sua consulta gratuita!</p>
        </div>
    </div>
    
</div>
        
{/* Fim MKT CLIENT */}


      </div>
{/* Inicio Footer */}
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

                <p className="footer__copy">&#169; Zé Auto, Varnahal & Chat GPT. Todos direitos reservados</p>
            </div>
        </footer>
{/* Fim Footer */}

    </main>
    
  );
}

export default App