import Layout from './components/Layout';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

export default function Home() {
  return (
    <Layout>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <div className="m-3" style={{
              'background':'#010101'
            }}>
              <img src="/logo.jpg" alt="MIYAMOTO - EARTHQUAKE STRUCTURAL ENGINEERS" title="MIYAMOTO - EARTHQUAKE STRUCTURAL ENGINEERS" className="img-fluid"/>
            </div>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Contexto</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Objetivo general</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Objetivos específicos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Entregables</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Alcances</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h1><i className="bi bi-chevron-right"></i> CONTEXTO</h1>
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
    </Layout>
  )
}
