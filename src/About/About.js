import { Col, Row, Container, Card } from 'react-bootstrap';
import '../index.css';

function App() {    
  return (
    <div>
    <Container fluid="lg">

          <Col>
            <br></br>
            <Row>
              <Col xs={8}>
                    <Card>
                      <Card.Body>
                        
                          <Card>
                            <Card.Body>
                              <p>This is my final project for the PromineoTech Front End Bootcamp. I decided to build a minimalist planning/personal assitant
                                program that would work well without being cluttered. Initially I wanted to add more features, but between a tight schedule and a lack
                                of understanding of React on my part, it wasn't feasible. Please enjoy what I have managed to make. Thank you.
                              </p>
                            </Card.Body>
                          </Card>
                        
                      </Card.Body>
                    </Card>
              </Col>
              <Col xs={4}>
                <Card id='createCard'>
                  <h5><b><u>Things I Would Have Liked to Add</u></b></h5>
                    <ul>
                      <li>Sub ToDos: to break up larger todos into smaller, more easily accomplished tasks.</li>
                      <li>A journal section with hideable dates to remove pressure from journaling every day.</li>
                      <li>A note color option, to change the color of the note background for organization/acessiblity.</li>
                      <li>A font size slider for acessiblity.</li>
                      
                    </ul>
                </Card>
              </Col>
            </Row>
            </Col>
          </Container>
          </div>
  );
}
export default App;