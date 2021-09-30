import Layout from './components/Layout';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <div className="p-3" style={{
                'background': '#010101'
              }}>
                <img src="/logo.jpg" alt="MIYAMOTO - EARTHQUAKE STRUCTURAL ENGINEERS" title="MIYAMOTO - EARTHQUAKE STRUCTURAL ENGINEERS" className="img-fluid" />
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
                  <Nav.Link eventKey="sixth"><i class="bi bi-file-earmark-bar-graph-fill"></i> Propuesta</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh"><i class="bi bi-person-bounding-box"></i> Equipo</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="mb-5">
              <h3>PROPUESTA DESARROLLO DE APLICACIÓN PARA WEB Y MOVILES</h3>
              <Tab.Content>
                <Tab.Pane eventKey="first">

                  <h1><i class="bi bi-circle-fill"></i> Contexto</h1>
                  <p>Fortalecer e institucionalizar la <b>gestión de riesgos y la capacidad de respuesta de las autoridades públicas</b> de desastres y socios del sector privado en entornos urbanos propensos a terremotos y altamente vulnerables en México.<br /><br />Los terremotos recientes han expuesto importantes lagunas y debilidades en los sistemas de respuesta y gestión del riesgo de desastres nacionales y municipales. Estas experiencias también han aumentado la conciencia y la voluntad política para <b>fortalecer los sistemas y las capacidades para mitigar la pérdida de vidas y los devastadores impactos sociales y económicos de los desastres sísmicos</b>.<br /><br /><b>Miyamoto International</b> ha estado trabajando con aliados del gobierno y el sector privado para implementar el <b>programa USAID/BHA PREPARE II</b> en Ciudad de México y Zapopan desde 2017 hasta 2020.<br /><br />La siguiente etapa, <b>PREPARE México 2020-2022</b> se centra en proveer asistencia técnica para el desarrollo de un marco operacional, incluyendo protocolos y procedimientos, para movilizar a evaluadores de daños capacitados después de un desastre por sismo en <b>3 sitios piloto: Zapopan en Jalisco, Benito Juárez y Xochimilco en Ciudad de México</b>.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h1><i class="bi bi-bullseye"></i> Objetivo general</h1>
                  <p>Fortalecimiento de la capacidad operativa de <b>Evaluación Rápida de Daños (ERD) y Evaluación Detallada de Daños (EDD)</b> en edificaciones afectadas por sismo a través de la <b>creación de un aplicativo móvil</b> para recopilar información de las ERD y las EDD después de un sismo en Ciudad de México (alcaldías piloto: Benito Juárez y Xochimilco) y Jalisco (municipio piloto: Zapopan).<br /><br /><b>Aplicativo móvil para los gobiernos socios del Programa</b> con acceso para más de 5 administradores técnicos, más de 5 administradores de contenido y más de 200 usuarios generales (con usuario y contraseña), con opción a crecer si se requiere y que cumpla con los estándares OGC donde exista un ambiente de producción y un ambiente de desarrollo separado <b>registrada y publicada en las tiendas PlayStore y AppleStore</b>. Deberá contar con espacio de preguntas frecuentes y espacio de contacto o de interacción para responder a las inquietudes de los usuarios. Deberá contemplar el <b>uso de mapas</b>.<br /><br /><b>Proporcionar la versión final del código fuente para ambas plataformas</b> solicitadas (el código debe compilar sin errores con los ambientes de desarrollo solicitados). En caso de que el aplicativo móvil haga uso de librerías externas desarrolladas por el proveedor, se debe suministrar el código fuente de todas las funcionalidades de las que haga uso el aplicativo móvil.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h1><i class="bi bi-lightbulb-fill"></i> Objetivo específicos</h1>
                  <ul>
                    <li><p>Diseño y desarrollo de un aplicación móvil para sistemas operativos Android e iOS</p></li>
                    <li><p>Usando software libre y de fuente abierta ReactJS/React-Native para el Frontend, Laravel para el backend, SQL base de datos</p></li>
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
                  <h1><i class="bi bi-file-check-fill"></i> Entregables</h1>
                  <ul>
                    <li><p>Aplicativo móvil para los gobiernos socios del Programa con acceso para más de 5 administradores técnicos, más de 5 administradores de contenido y más de 200 usuarios generales (con usuario y contraseña), con opción a crecer si se requiere y que cumpla con los estándares OGC donde exista un ambiente de producción y un ambiente de desarrollo separado registrada y publicada en las tiendas PlayStore y AppleStore. Deberá contar con espacio de preguntas frecuentes y espacio de contacto o de interacción para responder a las inquietudes de los usuarios. Deberá contemplar el uso de mapas.</p></li>
                    <li><p>Propuesta del mejor servicio de hosting configurando el ambiente para dar soporte necesario al sitio</p></li>
                    <li><p>Documentación del proceso, mejores prácticas y escalabilidad</p></li>
                    <li><p>Versión final del código fuente para ambas plataformas solicitadas (el código debe compilar sin errores con los ambientes de desarrollo solicitados). En caso de que el aplicativo móvil haga uso de librerías externas desarrolladas por el proveedor, se debe suministrar el código fuente de todas las funcionalidades de las que haga uso el aplicativo móvil.</p></li>
                    <li><p>Documentación de la configuración general de la aplicación incluyendo la base de datos, la configuración de servidores, la configuración de IP públicas, dominios y servicios asociados</p></li>
                    <li><p>Manual técnico</p></li>
                    <li><p>Guía de mantenimiento del aplicativo móvil en formato PDF</p></li>
                    <li><p>Manual del administrador del aplicativo móvil en formato PDF</p></li>
                    <li><p>Manual del usuario del aplicativo móvil en formato PDF y en formato interactivo</p></li>
                    <li><p>Capacitaciones por ubicación sobre su uso a los administradores de la herramienta incluyendo la conexión de la herramienta al Atlas de Riesgos de cada ubicación</p></li>
                    <li><p>Capacitaciones por ubicación sobre su uso a los usuarios finales de la herramienta</p></li>
                    <li><p>Plan de mantenimiento y actualización de la aplicación</p></li>
                    <li><p>Garantía técnica sobre el producto entregado incluyendo cada una de las funcionalidades que fueron desarrolladas en el aplicativo móvil por un periodo de al menos 4 meses contados a partir de la fecha de entrega. La garantía rige sobre aquellos posibles fallos que puedan generarse en el sistema, sin que ello implique erogación económica para USAID/BHA o Miyamoto International con un servicio de mantenimiento y soporte bajo el esquema de 8x5xNBD.</p></li>
                    <li><p>Lanzar la aplicación bajo la modalidad soft launch para probar las funcionalidades de la aplicación y su configuración en el hosting, en un entorno de prueba y disponibles a un grupo de usuario selecto para prueba. Se dará espacio para realizar las modificaciones basado en la retroalimentación de los usuarios asegurando su funcionalidad y buen funcionamiento.</p></li>
                    <li><p>Lanzar la aplicación completa cuando los socios gubernamentales y el Programa así lo determinen</p></li>
                    <li><p>Entregar la base de datos utilizando el gestor de SQL server 2019 en formato .bak</p></li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <h1><i class="bi bi-arrow-up-square-fill"></i> Alcances</h1>
                  <ul>
                    <li><p>Redactar y generar los entregables finales de acuerdo con los estándares de calidad de Miyamoto International y del donante; las recomendaciones y sugerencias del equipo de Miyamoto International y de los socios del Programa; y de los beneficiarios finales usando un enfoque colaborativo.</p></li>
                    <li><p>Desarrollar un plan de trabajo alineado al plan de trabajo del Programa USAID/BHA PREPARE México que contenga de forma mínima las partes y fases del proyecto, el análisis de los requerimientos, diseño de la propuesta, tecnología y prototipo, el desarrollo del aplicativo, las pruebas y ajustes, la colocación en tiendas de aplicativos y el lanzamiento en producción del aplicativo.</p></li>
                    <li><p>Reportar de forma semanal los avances de la consultoría a través de reuniones físicas o videollamadas virtuales con los equipos de PREPARE México y sus socios por medio de informes escritos del avance del desarrollo del aplicativo móvil con la documentación técnica apropiada.</p></li>
                    <li><p>Asistir a reuniones periódicas de monitoreo y seguimiento con socios del Programa o actores de interés según lo indique el Gerente del Programa.</p></li>
                    <li><p>Recolectar la información relacionada con la creación de protocolos y procedimientos a través de entrevistas, reuniones, talleres, investigación de campo, investigación documental e interacción con los actores relevantes y el equipo del Programa</p></li>
                    <li><p>Participar activamente en todas las sesiones del Grupo Experto de Trabajo a las que se le convoquen</p></li>
                    <li><p>Participar en calidad de consultor de Miyamoto International sin que esto represente propiedad intelectual o de otra índole sobre los materiales generados derivados de esta colaboración</p></li>
                    <li><p>Participar en un simulacro de evaluación rápida y detallada de daños por sismo con la finalidad de probar el aplicativo móvil</p></li>
                    <li><p>Participar en el intercambio de opiniones entre expertos de las ciudades en las que se implementa el Programa con la finalidad de homologar metodologías entre las diferentes ubicaciones</p></li>
                    <li><p>Estar disponible para brindar orientación, asesoramiento y recomendaciones sobre cuestiones de tecnología de la información a medida que las identifiquen, incluidas, por ejemplo, las necesidades de almacenamiento de datos a largo plazo, seguridad y accesibilidad para las partes interesadas del Programa</p></li>
                    <li><p>Antes de la entrega final y el cierre del contrato, garantizar que se realicen el número necesario de pruebas sólidas a nivel de campo de la aplicación como parte de este proceso hasta que el control de calidad interno de Miyamoto esté satisfecho con el producto final</p></li>
                    <li><p>Estar disponible para para responder las preguntas de las partes interesadas cuando surja la necesidad durante los 4 meses inmediatamente siguientes a la entrega del aplicativo móvil a los equipos de Ciudad de México y Zapopan</p></li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <h1><i class="bi bi-file-earmark-bar-graph-fill"></i> Propuesta</h1>
                  <Table striped hover size="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>CONCEPTO</th>
                        <th>DESCRIPCIÓN</th>
                        <th style={{ background: '#F05829', color: '#fff' }} className="text-center">Costo MXN</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Core System</td>
                        <td>Desarrollo de componentes nativos y compilación de código para IOS y Android</td>
                        <td className="text-center">$18,000.00</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Diccionarios y desarrollo de backend / Bases de datos</td>
                        <td>(Implementación de sistema de contenidos: Español) .</td>
                        <td className="text-center">$23,250.00</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Notificaciones y sistema de mapeo</td>
                        <td></td>
                        <td className="text-center">$11,500.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="text-right"><b>TOTAL</b></td>
                        <td className="text-center" style={{ background: '#F05829', color: '#fff' }}>$52,750.00</td>
                      </tr>
                    </tbody>
                  </Table>
                  <h3 className="pt-3"><span class="lnr lnr-plus-circle"></span> Mantenimiento</h3>
                  <hr />
                  <Table striped hover size="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>CONCEPTO</th>
                        <th>DESCRIPCIÓN</th>
                        <th style={{ background: '#F05829', color: '#fff' }} className="text-center">Costo MXN</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mantenimiento mensual</td>
                        <td>Incluye 36hrs de mantenimiento mensual for  changes or adjustments attached to the delivered system.<br /><small>(cloud infrastructure and email notification services, WHATSAPP notification service, Monthly payment)</small></td>
                        <td className="text-center">$18,625.00</td>
                      </tr>
                    </tbody>
                  </Table>
                  <hr />
                  <h3 className="pt-3"><span class="lnr lnr-plus-circle"></span> Plan de trabajo</h3>
                  <p className="p-0"><b>* 8 Semanas</b></p>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">* Actividades</th>
                        <th scope="col" colSpan="4">MES UNO</th>
                        <th scope="col" colSpan="4">MES DOS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Desarrollo y diseño de Frontend</th>
                        <td>S1</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S2</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S3</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S4</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S1</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S2</td>
                        <td>S3</td>
                        <td>S4</td>
                      </tr>
                      <tr>
                        <th scope="row">Backend / Infraestructura y bases de datos</th>
                        <td>S1</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S2</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S3</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S4</td>
                        <td>S1</td>
                        <td>S2</td>
                        <td>S3</td>
                        <td>S4</td>
                      </tr>
                      <tr>
                        <th scope="row">Creación e integración de Web Services and API's</th>
                        <td>S1</td>
                        <td>S2</td>
                        <td>S3</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S4</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S1</td>
                        <td>S2</td>
                        <td>S3</td>
                        <td>S4</td>
                      </tr>
                      <tr>
                        <th scope="row">Desarrollo CMS</th>
                        <td>S1</td>
                        <td>S2</td>
                        <td>S3</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S4</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S1</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S2</td>
                        <td>S3</td>
                        <td>S4</td>
                      </tr>
                      <tr>
                        <th scope="row">Integración de CRM</th>
                        <td>S1</td>
                        <td>S2</td>
                        <td>S3</td>
                        <td>S4</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S1</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S2</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S3</td>
                        <td>S4</td>
                      </tr>
                      <tr>
                        <th scope="row">Testeo y ajustes</th>
                        <td>S1</td>
                        <td>S2</td>
                        <td>S3</td>
                        <td>S4</td>
                        <td>S1</td>
                        <td>S2</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S3</td>
                        <td style={{ background: '#F05829', color: '#fff' }}>S4</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <h3 className="pt-3"><span class="lnr lnr-plus-circle"></span> Muestras de trabajo</h3>
                  <hr />
                  <h4>Servicio de evaluación de seguridad estructural</h4>
                  <h5>LINK: <Link href="http://imcyc.net/sese/">SESE</Link></h5>
                  <h4>Red del concreto y del cemento</h4>
                  <h5>LINK: <Link href="http://redcyc.com">REDCYC</Link></h5>
                  <h4>Calculadora de losas para vivienda</h4>
                  <h5>LINK: <Link href="https://calcula.com.mx/deacero">DEACERO</Link></h5>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <h1><i class="bi bi-person-bounding-box"></i> Equipo</h1>
                  <h3 className="pt-3"><span class="lnr lnr-plus-circle"></span> Equipo de desarrollo</h3>
                  <hr />
                  <ul>
                    <li><p><b>DESIGNER</b>: User Experience (UX), User Interface (UI).</p></li>
                    <li><p><b>FRONTEND DEVELOPER SR.</b>: Development in HTML5 / Node / React.</p></li>
                    <li><p><b>BACKEND DEVELOPER SR.</b>: Development in Node / React.</p></li>
                    <li><p><b>DevOps</b>: Infrastructure survey (servers, DB, IP, Domain and Licenses).</p></li>
                    <li><p><b>QA Tester:</b>: Quality testing in testing environment.</p></li>
                  </ul>
                  <hr />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Layout>
  )
}
