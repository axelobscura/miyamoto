import Layout from './components/Layout';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

export default function Home() {
  return (
    <Layout>
      <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <div className="p-3" style={{
              'background':'#010101'
            }}>
              <img src="/logo.jpg" alt="MIYAMOTO - EARTHQUAKE STRUCTURAL ENGINEERS" title="MIYAMOTO - EARTHQUAKE STRUCTURAL ENGINEERS" className="img-fluid"/>
            </div>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first"><i class="bi bi-circle-fill"></i> Contexto</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second"><i class="bi bi-bullseye"></i> Objetivo general</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third"><i class="bi bi-lightbulb-fill"></i> Objetivos específicos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth"><i class="bi bi-file-check-fill"></i> Entregables</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth"><i class="bi bi-arrow-up-square-fill"></i> Alcances</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth"><i class="bi bi-file-earmark-bar-graph-fill"></i> Propuesta</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth"><i class="bi bi-person-bounding-box"></i> Equipo</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h1><i class="bi bi-circle-fill"></i> CONTEXTO</h1>
                <p>Fortalecer e institucionalizar la <b>gestión de riesgos y la capacidad de respuesta de las autoridades públicas</b> de desastres y socios del sector privado en entornos urbanos propensos a terremotos y altamente vulnerables en México.<br/><br/>Los terremotos recientes han expuesto importantes lagunas y debilidades en los sistemas de respuesta y gestión del riesgo de desastres nacionales y municipales. Estas experiencias también han aumentado la conciencia y la voluntad política para <b>fortalecer los sistemas y las capacidades para mitigar la pérdida de vidas y los devastadores impactos sociales y económicos de los desastres sísmicos</b>.<br/><br/><b>Miyamoto International</b> ha estado trabajando con aliados del gobierno y el sector privado para implementar el <b>programa USAID/BHA PREPARE II</b> en Ciudad de México y Zapopan desde 2017 hasta 2020.<br/><br/>La siguiente etapa, <b>PREPARE México 2020-2022</b> se centra en proveer asistencia técnica para el desarrollo de un marco operacional, incluyendo protocolos y procedimientos, para movilizar a evaluadores de daños capacitados después de un desastre por sismo en <b>3 sitios piloto: Zapopan en Jalisco, Benito Juárez y Xochimilco en Ciudad de México</b>.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                lpjipijp
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                lpjipijp
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                lpjipijp
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                lpjipijp
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </Container>
    </Layout>
  )
}
