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
          <Col sm={9} className="mb-5">
            <h3>PROPUESTA DESARROLLO DE APLICACIÓN PARA WEB Y MOVILES</h3>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                
                <h1><i class="bi bi-circle-fill"></i> Contexto</h1>
                <p>Fortalecer e institucionalizar la <b>gestión de riesgos y la capacidad de respuesta de las autoridades públicas</b> de desastres y socios del sector privado en entornos urbanos propensos a terremotos y altamente vulnerables en México.<br/><br/>Los terremotos recientes han expuesto importantes lagunas y debilidades en los sistemas de respuesta y gestión del riesgo de desastres nacionales y municipales. Estas experiencias también han aumentado la conciencia y la voluntad política para <b>fortalecer los sistemas y las capacidades para mitigar la pérdida de vidas y los devastadores impactos sociales y económicos de los desastres sísmicos</b>.<br/><br/><b>Miyamoto International</b> ha estado trabajando con aliados del gobierno y el sector privado para implementar el <b>programa USAID/BHA PREPARE II</b> en Ciudad de México y Zapopan desde 2017 hasta 2020.<br/><br/>La siguiente etapa, <b>PREPARE México 2020-2022</b> se centra en proveer asistencia técnica para el desarrollo de un marco operacional, incluyendo protocolos y procedimientos, para movilizar a evaluadores de daños capacitados después de un desastre por sismo en <b>3 sitios piloto: Zapopan en Jalisco, Benito Juárez y Xochimilco en Ciudad de México</b>.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h1><i class="bi bi-bullseye"></i> Objetivo general</h1>
                <p>Fortalecimiento de la capacidad operativa de <b>Evaluación Rápida de Daños (ERD) y Evaluación Detallada de Daños (EDD)</b> en edificaciones afectadas por sismo a través de la <b>creación de un aplicativo móvil</b> para recopilar información de las ERD y las EDD después de un sismo en Ciudad de México (alcaldías piloto: Benito Juárez y Xochimilco) y Jalisco (municipio piloto: Zapopan).<br/><br/><b>Aplicativo móvil para los gobiernos socios del Programa</b> con acceso para más de 5 administradores técnicos, más de 5 administradores de contenido y más de 200 usuarios generales (con usuario y contraseña), con opción a crecer si se requiere y que cumpla con los estándares OGC donde exista un ambiente de producción y un ambiente de desarrollo separado <b>registrada y publicada en las tiendas PlayStore y AppleStore</b>. Deberá contar con espacio de preguntas frecuentes y espacio de contacto o de interacción para responder a las inquietudes de los usuarios. Deberá contemplar el <b>uso de mapas</b>.<br/><br/><b>Proporcionar la versión final del código fuente para ambas plataformas</b> solicitadas (el código debe compilar sin errores con los ambientes de desarrollo solicitados). En caso de que el aplicativo móvil haga uso de librerías externas desarrolladas por el proveedor, se debe suministrar el código fuente de todas las funcionalidades de las que haga uso el aplicativo móvil.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h1><i class="bi bi-lightbulb-fill"></i> Objetivo específicos</h1>
                <ul>
                  <li><p>Diseño y desarrollo de un aplicativo móvil para sistemas operativos Android e iOS</p></li>
                  <li><p>Usando software libre y de fuente abierta React Native para el Frontend, Laravel para el backend, SQL base de datos</p></li>
                  <li><p>El idioma del aplicativo móvil será el español</p></li>
                  <li><p>Que cumpla con los estándares OGC</p></li>
                  <li><p>Que cumpla con los lineamientos de evaluación de daños, estándares de seguridad e imagen (logo e iconografía) y diseño (tipografía en jerarquía de títulos, textos y destacados, así como la paleta de colores) de los gobiernos participantes</p></li>
                  <li><p>Que cuente con un diseño amigable, intuitivo y responsivo de front-end</p></li>
                  <li><p>Que sea compatible con el Atlas de Riesgos de las ubicaciones piloto (QGIS/ArcGIS/Google Earth o las que los socios beneficiarios determinen) siendo capaz de exportar datos, importar datos, leer y editar la información recolectada por el aplicativo móvil</p></li>
                  <li><p>Capaz de usarse en dispositivos móviles, tabletas o computadoras</p></li>
                  <li><p>Que permita la creación y configuración de alertas y que estas puedan ser envidas mediante notificaciones push-up</p></li>
                  <li><p>Capaz de generar reportes descargables y estadísticas en tiempo real de la información recolectada que puedan ser analizados por herramientas externas tales como QGIS o ArcGIS</p></li>
                  <li><p>Capaz de funcionar sin conexión a internet (offline) recopilando información que más tarde podrá descargarse usando conexión a internet (online)</p></li>
                </ul>
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
